import {StyleSheet, View} from 'react-native';

//TODO: Create a file CarResponse.ts, defining the expected response (type)
// (create a /types directory in /src and put the CarResponse.ts in there)
//TODO: Use the provided CarCard component (in /components) to display the car data
// Follow the TODO's

export default function App() {
    //TODO: put car list state here
    //TODO: add a loading state as well for user feedback

    //TODO: Create an async function that fetches the data from
    // https://raw.githubusercontent.com/OthelloEngineer/mobile-software-development-exercises/refs/heads/main/cars.json
    // and updates the state with the data
    // remember to update the loading state after fetching

    //TODO: check the loading-state - if true, you can input an ActivityIndicator, or
    // return some text telling the user that the page is loading


    return (
        <View style={styles.container}>
            {/* TODO: use a list (fx. FlatList) to display the data */}
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
