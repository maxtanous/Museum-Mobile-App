
import * as React from 'react';
import HomeScreenComponent from "../components/home-screen/HomeScreen";
import {View} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
      <View>
        <HomeScreenComponent
            navigation={navigation}
        ></HomeScreenComponent>
      </View>

  )
}