import {View, Text, Pressable, StyleSheet, Image, ActivityIndicator} from "react-native";
import {CameraType, CameraView, FlashMode, useCameraPermissions} from "expo-camera";
import {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons";

export default function App() {

    const [status, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState<string>('');
    const [cameraType, setCameraType] = useState<CameraType | undefined>("back");
    const [flashMode, setFlashMode] = useState<FlashMode>("off");
    const cameraRef = useRef<CameraView>(null);

    if (!status) {
        return <ActivityIndicator/>;
    }

    if (!status.granted) {
        return (
            <SafeAreaView style={{backgroundColor: "black", height: "100%"}}>
                <View style={{alignSelf: "center", paddingVertical: 100}}>
                    <Text style={styles.text}>You need to grant access to the camera.</Text>
                    <Text style={styles.text}>If you've already denied access, you can change it in settings.</Text>
                    <Pressable style={styles.pressable} onPress={requestPermission}>
                        <Text style={styles.buttonText}>Grant access</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
    }

    const takePicture = async () => {
        if (!cameraRef.current) return;
        else {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const switchCamera = () => {
        setCameraType((cameraType) => {
            if (cameraType === "back") {
                return "front";
            } else {
                return "back";
            }
        });
    }

    const toggleFlash = () => {
        setFlashMode((flashMode) => {
            if (flashMode === "off") {
                console.log("flashMode set to on");
                return "on";
            } else {
                console.log("flashMode set to off");
                return "off";
            }
        });
        console.log(`flash is ${flashMode}`)
    }

    const closeImage = () => {
        setImage('');
    }


    return (
        <SafeAreaView style={{backgroundColor: "#000000"}}>
            {image != '' ?
                <View>
                    <Pressable
                        onPress={closeImage}
                        style={{flexDirection: "row-reverse", zIndex: 100}}>
                        <MaterialIcons name={"close"} size={35} color="white"/>
                    </Pressable>
                    <Image style={styles.image} source={{uri: image}}/>
                </View>
                :
                <CameraView
                    facing={cameraType}
                    flash={flashMode}
                    ref={cameraRef}
                    style={styles.camera}
                    onMountError={console.error}
                />
            }
            {!image ?
                <View style={!image ? styles.bottomView : [styles.bottomView, {marginTop: 0}]}>
                    <Pressable onPress={switchCamera}>
                        <MaterialIcons name={"flip-camera-ios"} color={"white"} size={40}/>
                    </Pressable>
                    <Pressable onPress={takePicture}>
                        <MaterialIcons name={"photo-camera"} color={"white"} size={40}/>
                    </Pressable>
                    <Pressable onPress={toggleFlash}>
                        {
                            flashMode == "off" ?
                                <MaterialIcons name={"flash-off"} color={"white"} size={40}/>
                                :
                                <MaterialIcons name={"flash-on"} color={"white"} size={40}/>
                        }
                    </Pressable>
                </View>
                :
                <View style={!image ? styles.bottomView : [styles.bottomView, {marginTop: 0}]}>
                    <Pressable
                        onPress={closeImage}
                        style={{alignItems: "center"}}>
                        <MaterialIcons name={"photo-camera"} size={40} color={"white"}/>
                        <Text style={{color: "white"}}>Retake</Text>
                    </Pressable>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#316fb6",
        borderRadius: 10,
        padding: 10,
        width: "30%",
        alignItems: "center",
        alignSelf: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    },
    camera: {
        width: "100%",
        height: "90%",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: "88%",
        borderRadius: 10,
        resizeMode: "contain",
    },
    bottomView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#050505",
        height: "10%",
        marginTop: 20
    }
});