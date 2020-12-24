import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';

import db from '../config'

 function signup(){
    db.collection('login\signup').add({
      email:this.state.email,
      password:this.state.password
    })
}
function login(){
if(db.collection('login\signup').email===this.state.email && db.collection('login\signup').password===this.state.password ){
  <Alert> login succsess</Alert>
}
}

export default class SigninScreen extends React.Component{
    render(){
        this.state={
            email:'',
            password:''
        }
        return(
            <View>
             <TextInput onChangeText={text=>{this.setState(email=text)}}/>
             <TextInput onChangeText={text=>{this.setState(password=text)}}/>
             <Button title='login'/>
             <Button title='signup'/>
            </View>
        )
    }
}