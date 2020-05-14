import * as React from 'react';
import {  View } from 'react-native';

import ArtPieceScreenComponent from "../components/art-piece-screen/ArtPieceScreen";


export default function ArtPieceScreen({ navigation }) {
    return (
        <View>
            <ArtPieceScreenComponent
                navigation={navigation}
            ></ArtPieceScreenComponent>
        </View>

    )
}