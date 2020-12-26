import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import db from '../config'

function addBarter(){
   db.collection('myBarters').add({
      itemname:this.state.itemname,
      exchangerContact:this.state.exchangerContact,
      exchangerAddress:this.state.exchangerAddress,
      exchangeId:this.state.exchangeId
   })
}

function sendNotification(){
    if(db.collection('all_notification').status==='unsee'){
    db.collection('all_notification').add({
        donorId:this.state.donorId,
        date:this.state.date,
        itemname:this.state.itemname,
        message:this.state.message,
        userid:this.state.userid,
        status:'seen'
    })
}
}

export default class MyBarterScreen extends React.Component{
    render(){
        this.state={
            itemname:'',
            exchangerContact:'',
            exchangerAddress:'',
            exchangeId:''
        }
        return(
            <View>
              <TextInput onChangeText={text=>{this.setState(itemname=text)}}/>
              <TextInput onChangeText={text=>{this.setState(exchangerContact=text)}}/>
              <TextInput onChangeText={text=>{this.setState(exchangerAddress=text)}}/>
              <TextInput onChangeText={text=>{this.setState(exchangeId=text)}}/>
              <Button title='exchange' onPress={addBarter}/>
              <Button title='exchange for notifiaction' onPress={sendNotification}/>
              </View>
        )
    }
}