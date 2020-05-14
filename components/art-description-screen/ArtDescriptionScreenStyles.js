'use strict'

import {Dimensions, StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables'


let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    navigationLabels: {
        textAlign: 'center',
        fontSize: 20,
        marginTop:5,
        marginBottom: 5

    },
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
        marginTop: 10
    },
    buttonLabels: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
    },
    columnLayout: {
        flexDirection:'column',
        alignItems:'center',
        borderWidth: 5,
        borderColor: 'black',
        height: '25%'
    },
    image: {
        flexShrink: 1,
        width: '75%',
        height: '65%',
        marginTop: 0,
        marginBottom: 0,
        //marginRight:10,
        //marginLeft:10,
        resizeMode:'contain',
        
        borderWidth: 1,
        borderColor: GlobalVariables.commonColors.color
    },

    descriptionButton: GlobalVariables.descriptionButton,
    descriptionButtonText: GlobalVariables.buttonText,
    subheaderText: GlobalVariables.header, 

});

export default styles;