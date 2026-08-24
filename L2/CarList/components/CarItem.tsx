import {View, Text} from "react-native";

interface CarProps {
    type: string;
    mileage: number;
    price: number;
}

export default function CarItem({type, mileage, price}: CarProps) {
    return(
        <View>
            <Text>The {type} car has driven {mileage} miles and costs {price} usd.</Text>
        </View>
    )
}