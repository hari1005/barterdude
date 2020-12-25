import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import ScanScreen from "./screens/ScanScreen"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { Button } from 'react-native';

import db from '../config'

function additem(){
   db.collection('item').add({
       itemname:this.state.item,
       description:this.state.description
   })
}

export default class ExchangeScreen extends React.Component{
    render(){
        this.state={
            itemname:'',
            description:''
        }
        return(
            <View>
                <TextInput onChangeText={text=>{this.setState(itemname=text)}}/>
                <TextInput multiline={true} onChangeText={text=>{this.setState(description=text)}}/>
                <Button title='additem' onPress={{additem}}/>
            </View>
        )
    }
}