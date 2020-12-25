import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {SigninScreen} from './screens/signinscreen'
import {HomeScreen} from './screens/Homescreen'
import {ExchangeScreen} from './screens/Exchangecreen'
import {SettingsScreen} from './screens/SettingsScreen'

const Tab=createBottomTabNavigator()

export default class App extends React.Component{
  render(){
      return(
          <View>
            {SigninScreen}
            <Tab.navigator>
            <Tab.Sreens name='home' Component={HomeScreen}/>
            <Tab.Sreens name='exchange' Component={ExchangeScreen}/>
            <Tab.Sreens name='settings' Component={SettingsScreen}/>
            </Tab.navigator> 
          </View>
      )
  }
}

const AppContainer=createAppContainer(Tab)