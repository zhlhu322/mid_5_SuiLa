import React from "react";
import { StyleSheet } from "react-native";
import { Center, ScrollView, Box, Text, Pressable, HStack, VStack } from "@gluestack-ui/themed";


const AwaitingPickupScreen = () =>{
    return (
        <ScrollView style={styles.scrollview}>
          <Center style={styles.container}>
            <Text>已出貨的訂單將會顯示在此頁面</Text>
          </Center>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollview:{
      backgroundColor:"#F5F7F1",
      display:'flex',
      flex:'1',
      flexDirection:'column',
    },
    container:{
      paddingTop:40
    }
  
});

export default AwaitingPickupScreen;