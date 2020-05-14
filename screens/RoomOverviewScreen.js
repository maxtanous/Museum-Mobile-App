import * as React from 'react';
import {  View } from 'react-native';
import RoomOverviewScreenComponent from "../components/room-overview-screen/RoomOverviewScreen";



export default function RoomOverviewScreen({ navigation }) {
    return (
        <View>
            <RoomOverviewScreenComponent
                navigation={navigation}
            ></RoomOverviewScreenComponent>
        </View>
    )
}