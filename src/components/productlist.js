import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";

import ProductDetail from './productDetail';
import ProductData from '../json/ProductData.json'

const Productlist = () => {
  const renderItem = ({ item }) => < ProductDetail product={item} />
  return (
    <Box marginLeft={16} marginBottom={16} width={340}>
      <FlatList
        data={ProductData.data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    </Box>
  );
}


export default Productlist;
