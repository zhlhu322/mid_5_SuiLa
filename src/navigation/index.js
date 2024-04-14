import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HStack, Image, Text, Box } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import PersonalinfoScreen from '../screens/PersonalinfoScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

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
          borderRightColor: '#C8C8A9'
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
          tabBarLabel: "Top10",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <TopTab.Screen
        name="Newest"
        component={HomeScreen}
        options={{
          tabBarLabel: "Newest",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />

      <TopTab.Screen
        name="Instock"
        component={HomeScreen}
        options={{
          tabBarLabel: "In stock",
          tabBarLabelStyle: { fontSize: 12 },
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
              <Home_headerIcon />
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
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <BottomTab.Screen
        name="Personal"
        component={PersonalinfoScreen}
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
          <Home_headerIcon />
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
    </Stack.Navigator>

  );
}


/*把header的兩個icon包在一起、action寫在外面*/
const Home_headerIcon = () => {
  return (
    <HStack width={70} justifyContent='space-between'>
      <MaterialCommunityIcons name="magnify" color='#6A6A36' size={26} onPress={() => alert('You have touched Search')} />
      <MaterialCommunityIcons name="cart" color='#6A6A36' size={26} onPress={() => alert('You have touched Search')} />
    </HStack>
  );
};




export default Navigation;