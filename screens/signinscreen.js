import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';
import {HomeScreen} from './HomeScreen'

import db from '../config'

 function signup(){
    db.collection('login\signup').add({
      email:this.state.email,
      password:this.state.password
    })
    db.collection('login\signup').register='true'
}
function login(){
if(db.collection('login\signup').email===this.state.email && db.collection('login\signup').password===this.state.password ){
      db.collection('login\signup').register='true'
}
}

export default class SigninScreen extends React.Component{
    render(){
        if(db.collection('login\signup').register==='true'){
            this.props.navigation.navigate(HomeScreen)
        }
        this.state={
            email:'',
            password:''
        }
        return(
            <View>
             <TextInput onChangeText={text=>{this.setState(email=text)}}/>
             <TextInput onChangeText={text=>{this.setState(password=text)}}/>
             <Button title='login' onPress={login()}/>
             <Button title='signup' onPress={signup()}/>
            </View>
        )
    }
    
}