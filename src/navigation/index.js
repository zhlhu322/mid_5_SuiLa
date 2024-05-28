import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HStack, Image, Box, Input, Text, Center } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import PersonalinfoScreen from '../screens/PersonalinfoScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CameraScreen from '../screens/CameraScreen';
import HomeHeaderIcon from '../components/HomeHeaderIcon';
import AwaitingShipmentScreen from '../screens/AwaitingShipmentScreen';
import AwaitingPickupScreen from '../screens/AwaitingPickupScreen';
import CompOrderScreen from '../screens/CompOrderScreen';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs>
        <TopTabs />
      </BottomTabs>
    </NavigationContainer>
  );
}

const TopTabs = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Newest"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#C8C8A9',
          height: 50,
          borderRightWidth: 1,
          borderRightColor: '#C8C8A9',
          borderBottomColor:'#BEBEB0',
          borderBottomWidth:0.8,
        },
        tabBarInactiveTintColor: '#F5F7F1',
        tabBarActiveTintColor: '#F5F7F1',
        tabBarIndicatorStyle: {
          backgroundColor: '#F5F7F1',
          height: 3
        },
        tabBarItemStyle: {
          borderRightColor: '#F5F7F1',
          borderRightWidth: 1,
          height: 50
        }
      }}

    >
      <TopTab.Screen
        name="Top10"
        component={HomeScreen}
        options={{
          tabBarLabel: "水水最愛",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <TopTab.Screen
        name="Newest"
        component={HomeScreen}
        options={{
          tabBarLabel: "最新商品",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />

      <TopTab.Screen
        name="Instock"
        component={HomeScreen}
        options={{
          tabBarLabel: "現貨商品",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />


    </TopTab.Navigator>
  );
}


const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions=
      {({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Personal') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'cards-heart' : 'cards-heart-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#F5F7F1',
        },
      })}
    >
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarActiveTintColor: '#6A6A36',
          tabBarInactiveTintColor: '#6A6A36',
          headerRight: () => (
            <Box marginRight={16}>
              <HomeHeaderIcon />
            </Box>
          ),
          headerStyle: {
            backgroundColor: '#FEFFE6',
          },
          headerTitle: '',
          headerLeft: () => (
            <Image
              width={100} height={35}
              source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/logo_SuiLa.png?raw=true" }}
              alt="logoimage"
              marginLeft={16}
            />
          ),
        }}

      />
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarActiveTintColor: '#6A6A36',
          tabBarInactiveTintColor: '#6A6A36',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Personal"
        component={PersonalinfoStack}
        options={{
          tabBarActiveTintColor: '#6A6A36',
          tabBarInactiveTintColor: '#6A6A36',
          title: "Personal",
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <HomeHeaderIcon />
        ),
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#FEFFE6',
        },
        headerLeft: () => (
          <Image
            width={100} height={35}
            source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/logo_SuiLa.png?raw=true" }}
            alt="logoimage"
          />
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={TopTabs}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductScreen}
        options={{
          title: '',
          }}
       />
       <Stack.Screen
        name="camera"
        component={CameraScreen}
        options={{
          title: '',
          }}
       />
    </Stack.Navigator>

  );
}



const PersonalinfoStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#FEFFE6',
        },
        headerLeft: () => (
          <Image
            width={100} height={35} marginLeft={130}
            source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/logo_SuiLa.png?raw=true" }}
            alt="logoimage"
          />
        ),
      }}
    >
      <Stack.Screen
        name="Personalinfo"
        component={PersonalinfoScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="OrderScreen"
        component={PTopTabs}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>

  );
}

//把orderScreen的tab加到這邊，再把tab放到orderScreen的component中

const PTopTabs = () => {
  return (
    <TopTab.Navigator
      initialRouteName="awaitingShipment"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FEFFE6',
          height: 50,
          borderRightWidth: 1,
          borderRightColor: '#C8C8A9',
          borderBottomColor:'#6A6A36',
          //borderBottomWidth:0.8,
        },
        tabBarInactiveTintColor: '#6A6A36',
        tabBarActiveTintColor: '#6A6A36',
        tabBarIndicatorStyle: {
          backgroundColor: '#6A6A36',
          height: 3
        },
      }}

    >
      <TopTab.Screen
        name="awaitingShipment"
        component={AwaitingShipmentScreen}
        options={{
          tabBarLabel: "待出貨",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <TopTab.Screen
        name="awaitingPickup"
        component={AwaitingPickupScreen}
        options={{
          tabBarLabel: "待取貨",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />

      <TopTab.Screen
        name="訂單已完成"
        component={CompOrderScreen}
        options={{
          tabBarLabel: "訂單已完成",
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />

    </TopTab.Navigator>
  );
}


export default Navigation;