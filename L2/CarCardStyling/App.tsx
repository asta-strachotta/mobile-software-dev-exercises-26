import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CarRentalCard from "./components/CarRentalCard";

export default function App() {
    return (
        <View style={styles.container}>
            <CarRentalCard
                image={'https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/dk/product-token/09a39f80-2b73-4647-946a-4f290195ea02/vehicle/91545/padding/50,50,50,50/image-quality/70/day-exterior-03_218.png'}
                model={"Toyota"}
                rentalPrice={500}/>
            <StatusBar style="auto"/>
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
});
