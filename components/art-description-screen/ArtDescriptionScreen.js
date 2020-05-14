import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import DoubleClick from "react-native-double-tap";
import styles from "./ArtDescriptionScreenStyles";
//import Tts from 'react-native-tts';
import { connect } from 'react-redux';
import * as Speech from 'expo-speech'
import GlobalVariables from '../../styles/variables';
import artDescriptionScreenService from "./ArtDescriptionScreenService";


class ArtDescriptionScreen extends React.Component {

    state = {
        title: '',
        basic: '',
        spatial: '',
        thematic: ''
    };

    componentDidMount() {
        this.setState({
            title: this.props.title,
            basic: this.props.basic,
            spatial: this.props.spatial,
            thematic: this.props.thematic
        });
    };

    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                console.log("UP")
                Speech.stop()
                navigation.navigate('Home')
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                console.log("LEFT")
                //this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                Speech.stop()
                navigation.navigate('ArtPiece')
                break;
        }
    }

    speakNow(string)
        {
            Speech.speak(string);
        }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
            //onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
            >
                <View style={styles.container}>
                    <Text style={GlobalVariables.header}>
                        {this.state.title}
                    </Text>
                    <View style={styles.columnLayout}>
                        <TouchableOpacity style={styles.descriptionButton}>
                            <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => { 
                                    Speech.stop()
                                    Speech.speak(this.state.basic) 
                                }}
                                delay={300}
                            >

                                <Text style={styles.buttonLabels}>
                                    Basic Description
                            </Text>

                            </DoubleClick>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.columnLayout}>
                        <TouchableOpacity style = {styles.descriptionButton}>
                        <DoubleClick
                            singleTap={() => {
                                console.log("single tap");
                            }}
                            doubleTap={() => { 
                                Speech.stop()
                                Speech.speak(this.state.spatial); }
                            }
                            delay={300}
                            >
                            <Text style = {styles.buttonLabels}>
                                Spatial Description
                            </Text>
                        </DoubleClick>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.columnLayout}>
                        <TouchableOpacity style={styles.descriptionButton}>
                            <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => { 
                                    Speech.stop()
                                    Speech.speak(this.state.thematic); }
                                }
                                delay={300}
                            >
                                <Text style={styles.buttonLabels}>
                                    Thematic Description
                            </Text>
                            </DoubleClick>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        accessible = {true}
                        accessibilityLabel = "Select this element for app navigation instructions"
                        style = {GlobalVariables.navigationButton}>
                        <DoubleClick
                                singleTap={() => {Speech.stop(), Speech.speak(
                                    'Swipe left to go back. Swipe up to return to home screen.',   
                                )}}
                                
                            >
                        <Text style = {GlobalVariables.navigationText}>
                           Speak Navigation Instructions
                        </Text>
                        </DoubleClick>
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        )
    }
}

const mapStateToProps = state => ({
    title: state.artPieceData.title,
    id: state.artPieceData.id,
    basic: state.artPieceData.descriptionBasic,
    spatial: state.artPieceData.descriptionSpatial,
    thematic: state.artPieceData.descriptionThematic
});
export default connect(mapStateToProps, null)(ArtDescriptionScreen);