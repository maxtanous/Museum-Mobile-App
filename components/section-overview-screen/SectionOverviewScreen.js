import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import sectionOverviewScreenService from "./sectionOverviewScreenService";
import GlobalVariables from '../../styles/variables';
import styles from './sectionOverviewScreenStyle'
import {connect} from 'react-redux';
import {setArtPiece} from '../art-piece-screen/artPieceScreenActions';

class SectionOverviewScreen extends React.Component {

    state = {
        artObjects: []
    };

    async componentDidMount() {
        const response = await sectionOverviewScreenService.getZoneArt(this.props.zone);
        const artObjects = response.body.zone.art_objects;
        this.setState({artObjects:artObjects})
        console.log("Zone: ", this.props.zone)
    };

    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                navigation.navigate('Home')
                break;
            case SWIPE_DOWN:
                break;
            case SWIPE_LEFT:
                navigation.navigate('ArtPiece')
                break;
            case SWIPE_RIGHT:
                navigation.navigate('RoomOverview')
                break;
        }
    }
    onDoubleTap(navigation, title, id){
        //Call Redux function
        this.props.setArtPiece(title,id)
        navigation.navigate('ArtPiece')
    }

    artObjectButtonPress = (title,id)=> event => {
        this.props.setArtPiece(title,id)
        this.props.navigation.navigate('ArtPiece')
    }

    renderArtObjectButtons = () => {
        const views = [];
        for ( var i =0; i<this.state.artObjects.length; i++){
         views.push(
            <TouchableOpacity
               key={this.state.artObjects[i].id}
               onPress={this.artObjectButtonPress(this.state.artObjects[i].title,this.state.artObjects[i].id)}
               style={styles.artObjectButton}
               accessibilityLabel= {"Click to Navigate to Learn more about Art Object: " + this.state.artObjects[i].title}
            >
                <Text style = {styles.artObjectButtonText}>
                    {this.state.artObjects[i].title}
                </Text>
            </TouchableOpacity>
        );
        } 
        return views;
    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
            >
                <View style={styles.container}>                 
                    <Text style = {styles.header}>
                       Zone
                    </Text>

                    <ScrollView >
                        <View style = {styles.artObjectButtonView}>
                            {this.renderArtObjectButtons()}
                        </View>
                    </ScrollView>
                </View>
            </GestureRecognizer>
        )
    }
}

const mapStateToProps = state => ({
    zone: state.zoneData.zone

});

//You have to connect the component to the Redux Store.
export default connect(mapStateToProps, {setArtPiece})(SectionOverviewScreen);