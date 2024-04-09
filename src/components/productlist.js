import React from "react";
import { SectionList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";

import ProductDetail from './productDetail';
import ProductData from '../json/ProductData.json'

const Productlist = () => {
  const renderItem = ({ item }) => < ProductDetail product={item} />
  return (
    <Box marginLeft={16} marginBottom={16}>
      <Text fontSize={24} fontFamily="Roboto_500Medium" color="black" marginBottom={16}> Popular Books</Text>
      <SectionList
        sections={ProductData}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}


export default Productlist;
