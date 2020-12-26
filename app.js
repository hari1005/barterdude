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
import {MyBarterScreen} from './screens/MyBarterScreen'
import {UserDetailScreen} from './screens/UserDetailScreen'
import {NotificationScreen} from './screens/NotificationScreen'
import {RecieverDetailScreen} from './screens/RecieverDetailScreen'

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
            <Tab.Sreens name='MyBarters' Component={MyBarterScreen}/>
            <Tab.Sreens name='UserDetail' Component={UserDetailScreen}/>
            <Tab.Sreens name='ReacieverDetail' Component={RecieverDetailScreen}/>
            <Tab.Sreens name='Notifiactions' Component={NotificationScreen}/>
            </Tab.navigator> 
          </View>
      )
  }
}

const AppContainer=createAppContainer(Tab)