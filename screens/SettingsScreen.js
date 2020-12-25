import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';

import db from '../config'

function updatedata(){
  db.collection('info').update({
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      address:this.state.address,
      contact:this.state.contact
  })
}

export default class SettingScreen extends React.Component{
    render(){
        this.state={
            firstname:'',
            lastname:'',
            address:'',
            contact:''
        }
        return(
            <View>
                <TextInput value={this.state.firstname} onChangeText={text=>{this.setState(firstname=text)}}/>
                <TextInput value={this.state.lastname} onChangeText={text=>{this.setState(lastname=text)}}/>
                <TextInput value={this.state.address} onChangeText={text=>{this.setState(address=text)}}/>
                <TextInput value={this.state.contact} onChangeText={text=>{this.setState(contact=text)}}/>
                <Button title='save' onPress={updatedata()}/>
            </View>
        )
    }
}