import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,}  from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import  FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';



export default class App extends React.Component {
 
  render() {
    
    return <RootStack/>;
  }
}

const RootStack=createStackNavigator({
  Home:HomeScreen,
  First:FirstScreen,
  Second:SecondScreen,
  Third:ThirdScreen
},
{
  initialRouteName:'Home',
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
