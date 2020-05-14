'use strict'

import {Dimensions, StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables';

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({

    container: {
        height: screenHeight,
        width: screenWidth
    },
    header: {
        color: GlobalVariables.commonColors.color,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 0
    },
    bodyText: {
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        //borderWidth: 1,
        flexShrink: 1,
        //width: '50%',
        //borderColor: GlobalVariables.commonColors.color
    },
    columnLayout: {
        flexDirection:'column',
        alignItems:'center',
        borderWidth: 5,
        height: '70%'
        //borderColor: 'black'
    },
    image: {
        flex: 1,
        width: '50%',
        height: '50%',
        //marginTop: 5,
        //marginBottom: 0,
        //marginRight:10,
        //marginLeft:10,
        resizeMode:'contain',
        
        //borderWidth: 1,
        //borderColor: GlobalVariables.commonColors.color
    }
});

export default styles;