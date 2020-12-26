import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import db from '../config'

export default class UserDetailScreen extends React.Component{
    render(){
        return(
            <View>
                {db.collection('info')}
            </View>
        )
    }
}