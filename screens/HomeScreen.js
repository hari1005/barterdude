import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';
import {SigninScreen} from './signinscreen'

import db from '../config'
export default class HomeScreen extends React.Component{
    render(){
        if(db.collection('login\signup').register='false'){
          this.props.navigation.navigate(SigninScreen)
        }
        return(
            <View>
                <Button title='logout' onPress={db.collection('login\signup').register='false'}/>
                {db.collection('item')}
            </View>
        )
    }
    
}
