
import * as React from 'react';
import {  View } from 'react-native';
import SectionOverviewScreenComponent from "../components/section-overview-screen/SectionOverviewScreen";


export default function SectionOverviewScreen({ navigation }) {
    return (
        <View>
            <SectionOverviewScreenComponent
                navigation={navigation}
            ></SectionOverviewScreenComponent>
        </View>
    )
}