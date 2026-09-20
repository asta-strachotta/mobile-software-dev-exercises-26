import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import axios from "axios";
import {useEffect, useState} from "react";
import {CarResponse} from "./src/types/CarResponse";
import CarCard from "./src/components/CarCard";

export default function App() {
    const [carList, setCarList] = useState<CarResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            axios.get("https://raw.githubusercontent.com/OthelloEngineer/mobile-software-development-exercises/refs/heads/main/cars.json")
                .then((response) => {
                    setCarList(response.data);
                });

            //alternatively use fetch:

            // fetch("https://raw.githubusercontent.com/OthelloEngineer/mobile-software-development-exercises/refs/heads/main/cars.json")
            //     .then(res => res.json()).then((data) => {
            //         setCarList(data);
            // });

        } catch (error) {
            console.error(`Something went wrong: ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <ActivityIndicator/>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of cars:</Text>

            <FlatList
                data={carList}
                renderItem={({item}) =>
                    <CarCard car={item}/>
                }
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
});
