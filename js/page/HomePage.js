import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator"

export default class HomePage extends React.Component {
    
    render() {
        return <DynamicTabNavigator />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
