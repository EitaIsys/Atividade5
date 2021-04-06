import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumList from '../screens/AlbumList/index';
import Modal from '../screens/Modal/index';

const Main = createStackNavigator()
const Root = createStackNavigator()

function MainStackScreens() {
    return(
        <Main.Navigator>
            <Main.Screen 
                name = 'AlbumList'
                component = {AlbumList}
                options = {{headerShown:false}}
            />
        </Main.Navigator>
    )
}

export default function RootStackScreens() {
    return(
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen
                    name = 'MainStackScreens'
                    component = {MainStackScreens}
                    options = {{headerShown:false}} 
                />
                <Root.Screen 
                    name = 'Modal'
                    component = {Modal}
                    options = {{headerShown:false}}
                />
            </Root.Navigator>
        </NavigationContainer>
    )
}