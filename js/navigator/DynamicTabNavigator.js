import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import { BottomTabBar } from "react-navigation-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";

import NavigationUtil from "./NavigationUtil"


//在这里卑职路由页面
const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: "趋势",
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    }
}

export default class DynamicTabNavigator extends React.Component {
    componentWillMount = () => {
        NavigationUtil.navigation = this.props.navigation;
    }
    _tabNavigator = () => {
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
        //根据需要定制显示的tabs；
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }
        return createAppContainer(
            createBottomTabNavigator(tabs, {
                tabBarComponent: (props) => <TabBarComponent {...props} />
            })
        )
    }
    render() {
        const Tab = this._tabNavigator();
        return <Tab />
    }
}
class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            udateTime: new Date().getTime()
        }
    }
    render() {
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor
            />
        )
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
