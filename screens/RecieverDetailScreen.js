import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import db from '../config'

function addNotification(){
    db.collection('all_notification').add({
        donorId:this.state.donorId,
        date:this.state.date,
        itemname:this.state.itemname,
        message:this.state.message,
        userid:this.state.userid
    })
}

export default class RecieverDetailScreen extends React.Component{
    render(){
        this.state={
            donorId:'',
            date:'',
            itemname:'',
            message:'',
            userid:''
        }
        return(
            <View>
              <TextInput onChangeText={text=>{this.setState(donorid=text)}}/>
              <TextInput onChangeText={text=>{this.setState(date=text)}}/>
              <TextInput onChangeText={text=>{this.setState(itemname=text)}}/>
              <TextInput multiline={true} onChangeText={text=>{this.setState(messageid=text)}}/>
              <TextInput onChangeText={text=>{this.setState(userid=text)}}/>
              <Button title='exchange' onPress={addNotification}/>
            </View>
        )
    }
}