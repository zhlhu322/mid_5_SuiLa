import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";

import ProductDetail from './productDetail';



const Productlist = ({list}) => {
  const renderItem = ({ item }) => (
    <Box marginRight={40} marginBottom={20}>
      < ProductDetail product={item} />
    </Box>
  )
  return (
    <Box marginLeft={25} marginTop={40} >
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    </Box>
  );
}

export default Productlist;
