import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Header, noHeader} from '../components/headerBar';

//Start Screens
import {Main, Config} from '../screens';
//End Screens

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={noHeader}/>
            <Stack.Screen name="Config" component={Config} options={Header}/>
        </Stack.Navigator>        
    </NavigationContainer>
  );
}