import {View, Text, StyleSheet} from "react-native";

//TODO: import the CarResponse type
//TODO: define the interface for the props
//TODO: add props to function definition for the CarCard component
//TODO: display data from the car (car.carTitle, etc.)
//TODO: add conditional rendering, depending on the isAvailable property of the car
// (show "Car is unavailable" when isAvailable=false, otherwise display the car without isAvailable)

export default function CarCard() {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.carTitle}>

            </Text>
            <Text style={styles.carDetails}>
                Year:
            </Text>
            <Text style={styles.carDetails}>
                Color:
            </Text>
            <Text style={styles.carPrice}>
                Price per day:
            </Text>
            {/* Conditional rendering for isAvailable */}

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    carImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    carTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    carDetails: {
        fontSize: 14,
        color: "#666",
        marginBottom: 2,
    },
    carPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: "#007BFF",
        marginTop: 5,
    },
    unavailableText: {
        fontSize: 12,
        color: "#ff4444",
        fontWeight: "500",
        marginTop: 3,
    },
});