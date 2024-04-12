import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Divider, HStack, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import PersonalinfoScreen from '../screens/PersonalinfoScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

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
      initialRouteName="Home"
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
        name="Favorite"
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
        name="PersonalinfoScreen"
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
          headerRight:()=>( 
            <Home_headerIcon/>
            //<MaterialCommunityIcons name="magnify" size={24} onPress={()=>alert('You have touched Search')} /> 
          ),
          headerShadowVisible:false,
          headerStyle:{
            backgroundColor:'#FEFFE6'
          },
          headerLeft: () =>(
            <Image 
              width={100} height={35}
              source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/logo_SuiLa.png?raw=true" }}
              alt="logoimage"
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


const Home_headerIcon = () => {
  return(
    <HStack  width={70} justifyContent='space-between'>
      <MaterialCommunityIcons name="magnify" color='#6A6A36'size={26} onPress={()=>alert('You have touched Search')} />
      <MaterialCommunityIcons name="cart" color='#6A6A36' size={26} onPress={()=>alert('You have touched Search')} /> 
    </HStack>
  );
  
  
};


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