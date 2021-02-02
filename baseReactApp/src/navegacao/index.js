import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContent } from './DrawerContent'
import Home from '../views/Home'
import TelaA from '../views/TelaA'

const Drawer =  createDrawerNavigator()
const HomeStack = createStackNavigator();
const TelaAStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} color="#5B318A"/>}>
      <Drawer.Screen name="Home" component={ HomeStackScreen }/>
      <Drawer.Screen name="TelaA" component={ TelaAStackScreen }/>
    </Drawer.Navigator>
    </NavigationContainer>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5B318A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={Home} options={{
          title:'Home',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5B318A" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HomeStack.Navigator>
  );
const TelaAStackScreen = ({navigation}) => (
  <TelaAStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5B318A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <TelaAStack.Screen name="Home" component={TelaA} options={{
          title:'Home',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5B318A" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </TelaAStack.Navigator>
  );

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
