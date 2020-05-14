import * as React from 'react';
import {  View } from 'react-native';

import ArtDescriptionScreenComponent from "../components/art-description-screen/ArtDescriptionScreen";


export default function ArtPieceScreen({ navigation }) {
    return (
        <View>
            <ArtDescriptionScreenComponent
                navigation={navigation}
            ></ArtDescriptionScreenComponent>
        </View>

    )
}