import React, { useState }  from "react";
import { StyleSheet } from "react-native";
import { ScrollView, Box, Text, HStack, VStack,Image} from "@gluestack-ui/themed";
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from "react-native";

import OrderData from '../json/OrderData(AS).json';

const Orderlist = () => {

  const renderItem = ({ item }) => ( 
    <Box marginRight={25} marginBottom={20}>
      < OrderDetail order={item} />
    </Box>
  )
  return (
    <Box marginLeft={25} marginTop={15} >
      <FlatList
        data={OrderData.data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}

const OrderDetail = ({ order }) => {
  return(
    <Box style={styles.fullcontainer}>
        <Box style={styles.itemborder}>
          <HStack style={styles.itemcontainer}>
            <Image
              width={100} height={100} 
              borderRadius={8}
              alt="productImage"
              source={{uri:order.image}}
            />
            <VStack style={{gap:15, width:230, color:'black'}}> 
              <Text style={styles.text}>{order.title}</Text>
              <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text}>{order.size}</Text>
                <Text style={styles.text}>x1</Text>
              </HStack>
              <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:"#4E4E4E"}}>{order.situation}</Text>
                <Text style={styles.text}>${order.price}</Text>
              </HStack>
              
            </VStack>
          </HStack>
        </Box>
      </Box>

  )
}

const AwaitingShipmentScreen = () =>{

  return (
    <ScrollView style={styles.scrollview}>
      <Orderlist/>
      
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
  item:{
    borderColor:"#6A6A36",
    borderWidth:1
  },
  itemcontainer:{
    gap:10,
    marginBottom:20,
    alignItems:'center',
  },
  itemborder:{
    borderBottomWidth:1,
    borderColor:'#6A6A36'
  },
  text:{
    color:'black',
    fontSize:16
  }

});

export default AwaitingShipmentScreen;