import {View, Image, StyleSheet, Text, Pressable, Button} from "react-native";

interface CardProps {
    image: string;
    model: string;
    rentalPrice: number;
}

export default function CarRentalCard({image, model, rentalPrice}: CardProps) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.information}>
                    Model: {model}
                </Text>
                <Text style={styles.information}>
                    Price pr. day: {rentalPrice} DKK
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Rent now!</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        resizeMode: "stretch",
        width: 160,
        height: 100,
    },
    button: {
        width: '100%',
        backgroundColor: '#24ca00',
        borderColor: '#24ca00',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#254e09',
    },
    information: {
        fontSize: 16,
        color: 'white',
    },
    rightContainer: {
        backgroundColor: '#789fd5',
        padding: 10,
        borderRadius: 10,
    },
    container: {
        backgroundColor: '#b5c8e3',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10
    }
});