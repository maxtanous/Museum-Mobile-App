import {Dimensions, StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables'

let screenHeight = Dimensions.get("window").height
let screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
        resizeMode: 'contain'
    },
    homePageHeader: {
        color: GlobalVariables.commonColors.color,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 35
    },
    bowdoinSeal: {
        marginTop: 20,
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
    blackPageView: {
        backgroundColor: 'black',
        // height: 400,
        height: screenHeight/2,
        // height: '50%',
        width: '90%',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    whitePageView: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        padding: 10,
        alignSelf: 'center',
        alignItems: "center",
    },
    locationView: {
        padding: 10,
        backgroundColor: GlobalVariables.greyColor,
        alignSelf: 'center',
        // height: '50%',
        height: '50%',
        width: '95%',
        // marginTop: 50,
        marginTop: '3%',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
    },
    sectionOverviewButton: GlobalVariables.primaryButton,
    sectionOverviewButtonText: GlobalVariables.buttonText,
    subheaderText: {
        color: '#29acdc',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
    },

});


export default styles; 