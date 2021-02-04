import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContent } from './DrawerContent'
import Home from '../views/Home'
import TelaA from '../views/TelaA'
import Service from '../services/Services'
import Search from '../views/Search'

const Drawer =  createDrawerNavigator()
const HomeStack = createStackNavigator();
const TelaAStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ServiceStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} color="#5B318A"/>}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Search" component={ SearchStackScreen }/>
      <Drawer.Screen name="TelaA" component={ TelaAStackScreen }/>
      <Drawer.Screen name="Service" component={ ServiceStackScreen }/>
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

  const ServiceStackScreen = ({navigation}) => (
    <ServiceStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#5B318A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ServiceStack.Screen name="Home" component={Service} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#5B318A" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ServiceStack.Navigator>
    );

  const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5B318A', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
          
      }}>
          <SearchStack.Screen name="Search" component={Search} options={{
              headerLeft: () => (
                <Icon.Button name="arrow-back" size={25} backgroundColor="#5B318A" onPress={() => navigation.goBack()}></Icon.Button>
              ),
              headerTitle: () => (
                <SearchBar />
              )
            }}
          />
  </SearchStack.Navigator>
  );

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});