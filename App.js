import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/navigation";
import { GluestackUIProvider, ScrollView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from "./src/redux/store";
import ProfileScreen from './src/screens/ProfileScreen';
import PersonalinfoScreen from './src/screens/PersonalinfoScreen';
import { Appearance, useColorScheme } from 'react-native';
import { ThemeProvider } from './src/theme/theme-context'; 



const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <QueryClientProvider client={queryClient}> 
       <ThemeProvider>  
            <GluestackUIProvider config={config}>
              <Navigation />
            </GluestackUIProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </Provider>

  );
}


export default App;