import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/navigation";
import { GluestackUIProvider, ScrollView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { Provider } from 'react-redux';
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <Navigation />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </Provider>

  );
}


export default App;