import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Divider, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //還沒下載套件

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import PersonalinfoScreen from '../screens/PersonalinfoScreen';
import FavoriteScreen from '../screens/FavoriteScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6A6A36',
        tabBarInactiveTintColor: '#6A6A36',
        tabBarStyle: {
          backgroundColor :'#F5F7F1',
          position:'absolute'
          //shadow用不出來
        }
      }}
    >
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarActiveTintColor: '#6A6A36',
          tabBarInactiveTintColor: '#6A6A36',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-heart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarActiveTintColor: '#6A6A36',
          tabBarInactiveTintColor: '#6A6A36',
          headerShown:false,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          )

        }}
      />
      <Tab.Screen
        name="Personal"
        component={PersonalinfoScreen}
        options={{
          title: "Personal",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title:'',
          headerRight:()=>( <MaterialCommunityIcons name="magnify" size={24} onPress={()=>alert('You have touched Search')} /> ),
          headerShadowVisible:false,
          headerLeft: () =>(
            <Image 
            width={90} height={32}
            source={{ uri:  }}
            alt="ProductImage"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductScreen}
        options={{
          headerTintColor: '#000',
          headerTitle:'',
          headerRight:()=>( <HeaderIcon/> ),
          headerLeft: ()=>( <CustomBackButton/> )
        }}
      />
    </Stack.Navigator>
    
  );
}

const HeaderIcon = () => {
  const [iconName, setIconName] = useState('bookmark-outline'); 
  const [iconColor, setIconColor] = useState('black');
  
  const handleIconPress = () => {
    const newIconName = iconName === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline';
    const newIconColor = iconColor === 'black' ? '#6200EE' : 'black';
    setIconName(newIconName);
    setIconColor(newIconColor);
  };

  return (
    <TouchableOpacity onPress={handleIconPress} >
      <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

const CustomBackButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={ handleBackPress }>
      <MaterialCommunityIcons name="chevron-left" size={30} />
    </TouchableOpacity>
  );
};

export default Navigation;