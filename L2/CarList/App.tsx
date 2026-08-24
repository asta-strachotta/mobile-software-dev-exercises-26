import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import CarItem from "./components/CarItem";

export default function App() {
    const carList = [
        {id: 1, type: "Mercedes", mileage: 1000, price: 5000},
        {id: 2, type: "Opel", mileage: 1000, price: 10000},
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={carList}
                renderItem={({item}) =>
                    <CarItem type={item.type} mileage={item.mileage} price={item.price}/>}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 500,
    },
});
