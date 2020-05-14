'use strict'

import {StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables';
import {  Dimensions } from 'react-native';

let screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
       height: screenHeight,
       color: GlobalVariables.commonColors.color,

    },
    header: {
        color: GlobalVariables.commonColors.color,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 10
    },
    zoneButton: {
        height: 70,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#29acdc',
        borderWidth: 3,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    zoneButtonView: {
        alignItems: 'center',
    },
    zoneButtonText: {
        color: GlobalVariables.commonColors.color,
        fontSize: 30
    }
});


export default styles;