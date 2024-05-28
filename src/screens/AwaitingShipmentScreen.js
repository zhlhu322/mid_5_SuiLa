import React from "react";
import { StyleSheet } from "react-native";
import { Center, ScrollView, Box, Text, Pressable, HStack, VStackI,Image, VStack } from "@gluestack-ui/themed";


const AwaitingShipmentScreen = () =>{

  return (
    <ScrollView style={styles.scrollview}>
      <Box style={styles.fullcontainer}>
        <Box style={styles.itemborder}>
          <HStack style={styles.itemcontainer}>
            <Image
              width={100} height={100} 
              borderRadius={8}
              alt="productImage"
              source={{uri:"https://i.pinimg.com/564x/d5/d8/13/d5d813f2d56762204c0dad545a65e9e9.jpg"}}
            />
            <VStack style={{gap:15, width:220, color:'black'}}> 
              <Text style={styles.text}>奇美博物館灰色短洋</Text>
              <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text}>M</Text>
                <Text style={styles.text}>x1</Text>
              </HStack>
              <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text}>備貨中</Text>
                <Text style={styles.text}>$480</Text>
              </HStack>
              
            </VStack>
          </HStack>
        </Box>
      </Box>
      
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
  fullcontainer:{
    paddingTop:40
  },
  item:{
    borderColor:"#6A6A36",
    borderWidth:1
  },
  itemcontainer:{
    gap:30,
    marginLeft:20,
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
  },
  itemborder:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#6A6A36'
  },
  text:{
    color:'black',
    fontSize:16
  }

});

export default AwaitingShipmentScreen;