import {Dimensions, StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables'

let screenHeight = Dimensions.get("window").height
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
        marginTop: 10
    },
    bowdoinSeal: {
        marginTop: 20,
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    blackPageView: {
        backgroundColor: 'black',
        height: 400,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center',
        marginTop: 60
    },
    whitePageView: {
        backgroundColor: 'white',
        height: 380,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    subheaderText: {
        color:GlobalVariables.commonColors.color,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25
    },
    bodyText: {
        color: 'black',
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: 17
    },
    buttonText: {
        color: '#29acdc',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    columnLayout: {
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 5,
        borderColor: 'black',
        height: '25%'
    },
    artPieceTitleButton: GlobalVariables.titleButton,
    artPieceTitleButtonText: GlobalVariables.buttonText,
    subheaderText: GlobalVariables.header,
    artObjectButton: {
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
    artObjectButtonView: {
        alignItems: 'center',
    },
    artObjectButtonText: {
        color: GlobalVariables.commonColors.color,
        fontSize: 20
    }

    
});


export default styles;