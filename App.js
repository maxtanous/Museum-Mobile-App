import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import allReducers from './store/Store';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import RoomOverviewScreen from "./screens/RoomOverviewScreen";
import HomeScreen from "./screens/HomeScreen";
import SectionOverviewScreen from "./screens/SectionOverviewScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen";
import ArtDescriptionScreen from "./screens/ArtDescriptionScreen"
const Stack = createStackNavigator();

const middleware = [thunk, logger];

const store = createStore(allReducers,
  compose(applyMiddleware(...middleware))
  );


function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RoomOverview" component={RoomOverviewScreen} />
                <Stack.Screen name="SectionOverview" component={SectionOverviewScreen} />
                <Stack.Screen name="ArtPiece" component={ArtPieceScreen} />
                <Stack.Screen name="ArtDescription" component={ArtDescriptionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import useLinking from './navigation/useLinking';
//
// const Stack = createStackNavigator();
//
// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);
//
//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();
//
//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());
//
//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }
//
//     loadResourcesAndDataAsync();
//   }, []);
//
//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//           <Stack.Navigator>
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
