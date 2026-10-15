import {View, Text, StyleSheet, Pressable, Image} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {CarResponse} from "../types/CarResponse";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CarCard() {
    //TODO: create a car state using the CarResponse type

    //TODO: use a useEffect to either load or fetch data (one of the functions you will create)

    //TODO: create a function that fetches data using API, sets the state with a
    // random car from the response, and persists the random car to async storage

    //TODO: create a function that receives a car as argument, and that persists that car

    //TODO: create a function that loads the car from persistent storage and returns it

    //TODO: create a function that tries to load the car from persistent storage (your previously
    // created function). If the storage is empty, then fetch using API (other previously created
    // function). If the car is found in storage, set the car state.

    //TODO: if the car state is empty, return a screen informing the user that no car is available

    const rentNow = () => {
        console.log("Car rented!");
    }

    return (
        <View style={styles.cardContainer}>
            {/*TODO: add onPress that will fetch a random car from API*/}
            <Pressable style={styles.getRandomCar}>
                <Text style={styles.getRandomCarText}>Get Random Car From API!</Text>
            </Pressable>
            <View style={styles.contentContainer}>
                <Image
                    source={require("../../assets/batmobile.jpg")}
                    style={styles.carImage}
                />
                <View style={styles.textContainer}>
                    {/*TODO: using Text-components (or what you'll like), display the name,
                       model and price per day for the car in state*/}
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