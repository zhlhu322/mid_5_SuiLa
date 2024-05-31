import React from "react";
import { FlatList } from "react-native";
import { Box } from "@gluestack-ui/themed";

import ProductDetail from './ProductDetail';

const Productlist = ({list}) => {
  const renderItem = ({ item }) => ( 
    <Box marginRight={40} marginBottom={20}>
      < ProductDetail product={item} />
    </Box>
  )
  return (
    <Box marginLeft={25} marginTop={15} >
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
