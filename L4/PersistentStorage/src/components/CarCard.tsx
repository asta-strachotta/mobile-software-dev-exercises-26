import {View, Text, StyleSheet, Pressable, Image} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {CarResponse} from "../types/CarResponse";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CarCard() {
    const [car, setCar] = useState<CarResponse | null>(null);

    useEffect(() => {
        loadOrFetchCar();
    }, []);


    const fetchData = async () => {
        console.log("Fetching Car from API");
        try {
            axios.get("https://raw.githubusercontent.com/OthelloEngineer/mobile-software-development-exercises/refs/heads/main/cars.json")
                .then((response) => {
                    //get some random car from the list of cars
                    const randomCar = response.data[Math.floor(Math.random() * response.data.length)];

                    //set the random car in state
                    setCar(randomCar);
                    //save the random car in storage
                    persistData(randomCar);
                })
        } catch (error) {
            console.log("Error while fetching car data: " + error);
        }
    }

    const persistData = async (carData: CarResponse) => {
        console.log("Persisting car");
        try {
            await AsyncStorage.setItem("carData", JSON.stringify(carData));
        } catch (error) {
            console.log(error)
        }
    }

    const loadPersistedCar = async () => {
        console.log("Loading Car");
        try {
            const savedCar = await AsyncStorage.getItem("carData");

            if (savedCar) {
                return JSON.parse(savedCar);
            }

            return null;

        } catch (error) {
            console.log("Error with loading car: " + error);
            return null;
        }
    }

    const loadOrFetchCar = async () => {
        const persistedCar = await loadPersistedCar();
        if (!persistedCar) {
            //if there's no car in storage, fetch data from API
            console.log("No saved car found. Fetching from API.")
            fetchData();
        } else {
            //if the car is successfully fetched from local storage,
            //set the persisted car in state
            console.log("Car found in persistent storage");
            setCar(persistedCar);
        }
    }

    if (!car) {
        return (
            <View>
                <Text>No car available:(</Text>
            </View>
        );
    }

    const rentNow = () => {
        console.log("Car rented!");
    }


    return (
        <View style={styles.cardContainer}>
            <Pressable style={styles.getRandomCar} onPress={fetchData}>
                <Text style={styles.getRandomCarText}>Get Random Car From API!</Text>
            </Pressable>
            <View style={styles.contentContainer}>
                <Image
                    source={require("../../assets/batmobile.jpg")}
                    style={styles.carImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.carModel}>{car.name}</Text>
                    <Text style={styles.carModel}>{car.model}</Text>
                    <Text style={styles.carPrice}>{`$${car.pricePerDay}/day`}</Text>
                </View>
            </View>

            <Pressable style={styles.rentButton} onPress={rentNow}>
                <Text style={styles.buttonText}>Rent Now</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    getRandomCar: {
        backgroundColor: "darkblue",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    getRandomCarText: {
        color: "white",
        fontSize: 16,
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rentButton: {
        marginTop: 10,
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "center",
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        margin: 10,
        width: "90%",
        alignSelf: "center",
    },
    carImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    carModel: {
        fontSize: 18,
        fontWeight: "bold",
    },
    carPrice: {
        fontSize: 16,
        color: "#888",
        marginTop: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});