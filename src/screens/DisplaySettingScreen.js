import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Center, Switch, HStack, Text } from '@gluestack-ui/themed';
import { StyleSheet, View } from "react-native";
import { toggleTheme } from '../redux/themeSlice';

const DisplaySettingScreen = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
   <View style={darkMode ? styles.darkContainer : styles.lightContainer}>
     <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      bg="white" borderRadius={3}
     >
      <HStack space={8} alignItems="center" >
         <Text size="lg" px="$2">Dark Mode</Text>
         <Switch
            name="Dark Mode"
            size='md'
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
            value={darkMode}
            onValueChange={handleToggle}
         />
      </HStack>        
     </Center>
     </View>
  );
};
const styles = StyleSheet.create({
    
   darkContainer: {
     backgroundColor: '#D1D1C0',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   lightContainer: {
     backgroundColor: '#F5F7F1',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
});
export default DisplaySettingScreen;
