import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import homeScreenService from "./homeScreenService";
import GlobalVariables from '../../styles/variables';
import { getAllArtPieces} from "../art-piece-screen/artPieceScreenActions";
import {connect} from 'react-redux';
import DoubleClick from "react-native-double-tap";
import * as Speech from "expo-speech";
import styles from "./homeScreenStyle";

class HomeScreen extends React.Component {
    state = {
        location: ""
    };

    componentDidMount() {
        this.props.getAllArtPieces();
        let location = homeScreenService.getCurrentLocation();
        this.setState({location: location})
    };

    onSwipe(gestureName, navigation) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                console.log("UP")
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                Speech.stop()
                navigation.navigate('RoomOverview')
                //  this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                break;
        }
    }

    onSwipeLeft(direction, navigation) {
        navigation.navigate('RoomOverview');
    }

    navigateToRoomOverview = () => {
        this.props.navigation.navigate('RoomOverview')
    }

    render() {
        return(
            <View style={styles.container}>
                <GestureRecognizer
                    onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
                    onSwipeLeft={(direction) => this.onSwipeLeft(direction, this.props.navigation)}
                >
                    <Text style = {styles.homePageHeader}>
                        Bowdoin Art Museum
                    </Text>
                    <Image
                        style={styles.bowdoinSeal}
                        source={require('../../assets/images/Bowdoin_Seal.png')}
                    />
                    <TouchableOpacity
                        accessible = {true}
                        accessibilityLabel = "Select this element for app navigation instructions"
                        style = {GlobalVariables.navigationButton}>
                        <DoubleClick
                                singleTap={() => {Speech.stop(), Speech.speak(
                                    'Swipe left to navigate forward one screen. Swipe right to navigate back one screen. If voiceover is on, hold down and drag around screen to select different objects. Select zone buttons to learn more about individual zones. Select art piece buttons to learn more about each art piece.',
                                    
                                )}}
                                
                            >
                        <Text style = {GlobalVariables.navigationText}>
                           Speak Navigation Instructions
                        </Text>
                        </DoubleClick>
                    </TouchableOpacity>


                    <View style = {styles.blackPageView}>

                        <View style = {styles.whitePageView}>
                            <Text style = {styles.subheaderText}>
                                Welcome!
                            </Text>

                        <View style = {styles.locationView}>
                            <Text style = {styles.subheaderText}>
                                Your Location is:
                                
                            </Text>
                            <Text style = {styles.subheaderText}>
                                Room: Bowdoin Gallery
                            </Text>
                            <Text style = {styles.subheaderText}>
                                Zone: 1

                            </Text>
                        </View>
                    
                        <TouchableOpacity accessible = {true}
                            style = {styles.sectionOverviewButton} 
                            onPress={this.navigateToRoomOverview}
                            accessibilityLabel= "Select this element to navigate to Room Overview Screen"
                        >
                            <Text style = {styles.sectionOverviewButtonText}>
                                Room Overview
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </GestureRecognizer>
            </View>
        );
    }
}

export default connect(null, {getAllArtPieces})(HomeScreen);