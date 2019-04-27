/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppPage from "./js/navigator/AppNavigator";
//关闭全部黄色警告
console.disableYellowBox = true
export default class App extends Component {
  render() {
    return (
      <AppPage />
    );
  }
}
