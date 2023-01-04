import React from 'react';
import { View , StyleSheet, Route } from 'react-native';

// import { createStackNavigator} from '@react-navigation/native-stack';

// import {stacknavigator}
// import { StackNavigator } from "react-navigation";

import MusicPlayer from './assets/Source/Screens/MusicPlayer';
import SignUp from './assets/Source/Screens/SignUp';
import LogIn from './assets/Source/Screens/LogIn';
import StartScreen from './assets/Source/Screens/StartScreen';
import LibraryScreen from "./assets/Source/Screens/LibraryScreen";
// const Stack = createStackNavigator();

const App = () => {

//     const AppNavigator = StackNavigator({
//   Home: { screen: StartScreen},
//   login: { screen: LogIn },
//   player:{screen: MusicPlayer},
//   register:{screen: SignUp}
// },
// {
//     initialRouteName: 'Home',
// }

// );
    return(
<View style={styles.container}>

      {/* <LogIn/> */}
      {/* <SignUp/> */}
       {/* <StartScreen/> */}
       {/* <MusicPlayer/> */}
      <LibraryScreen/>
</View>


    );
};

export default App;

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
});