import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./artPieceScreenStyle";
import GlobalVariables from '../../styles/variables';
import {resetArtPiece, setArtPieceDescriptions} from './artPieceScreenActions';
import { connect } from 'react-redux';
import artPieceScreenService from './artPieceScreenService';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import {  Card, CardItem, Text, } from 'native-base';
import DoubleClick from "react-native-double-tap";
import * as Speech from "expo-speech";

class ArtPieceScreen extends React.Component {

    state = {
        title: '',
        medium: '',
        dimensions: '',
        descriptionBasic: '',
        descriptionSpatial: '',
        descriptionThematic: '',
        imageUrl: '',
        countryOrigin: ''
    };

    componentDidMount =  async () => {
        //Calling on the Redux Store
        let artPieceId = this.props.id;
        let artPiece = await artPieceScreenService.getArtPieceInfo(artPieceId);
        this.setState({
            title: artPiece.body.title,
            imageUrl: artPiece.body.image_url,
            descriptionBasic: artPiece.body.description_basic,
            descriptionThematic: artPiece.body.description_thematic,
            descriptionSpatial: artPiece.body.description_spatial,
            countryOrigin: artPiece.body.country_origin
        });
        this.props.setArtPieceDescriptions(artPiece.body.description_basic,artPiece.body.description_spatial,artPiece.body.description_thematic);
    };

    //store piece title etc as variables
    //make this class a type of interface? not sure proper term
    //so that it can be replicated



    onSwipe(gestureName, navigation) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                //Calling function from redux to reset the art piece data
                this.props.resetArtPiece();
                Speech.stop()
                navigation.navigate('Home')
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                Speech.stop()
                navigation.navigate('ArtDescription')
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                console.log("LEFT")
                //this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                Speech.stop()
                navigation.navigate('SectionOverview')
                break;
        }
    }

    render(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        let imageHieght = windowHeight/2
            return(
                <GestureRecognizer
                    onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation )}
                    //onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
                >
                    <View>
                        <DoubleClick
                            doubleTap={() => {Speech.speak(this.state.descriptionBasic)}}
                            delay={300}
                        >
                            <Card>
                                <CardItem header border>
                                    <Text style = {GlobalVariables.header}>  {this.state.title}</Text>
                                </CardItem>
                                <CardItem>
                                    <Image source={{uri: this.state.imageUrl}} 
                                           style={{height: imageHieght/1.3, width: windowWidth, flex: 1, resizeMode: 'contain'}}/>
                                </CardItem>
                                <CardItem>
                                    <Text> Country of Origin: {this.state.countryOrigin}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text> Description: {this.state.descriptionBasic}</Text>
                                </CardItem>
                            </Card>
                        </DoubleClick>
                    </View>
                    <TouchableOpacity style = {GlobalVariables.navigationButton}
                        accessible = {true}
                        accessibilityLabel = 'Select this element to access more descriptions'
                        >
                        <DoubleClick
                          singleTap={() => {Speech.speak('Double tap the screen to hear the basic description. Swipe down from top of screen to access more descriptions. Swipe left to go back.')}}
                          delay={300}
                          >
                        <Text style = {GlobalVariables.navigationText}>
                            Speak Navigation Instructions
                        </Text>
                        </DoubleClick>
                    </TouchableOpacity>
                </GestureRecognizer>
            )
        }
    
}

//Get props from redux state 
const mapStateToProps = state => ({
    title: state.artPieceData.title,
    id: state.artPieceData.id

});

//Connect both state (props) and function (dispatches) to Component; 
export default connect(mapStateToProps, {resetArtPiece, setArtPieceDescriptions})(ArtPieceScreen);