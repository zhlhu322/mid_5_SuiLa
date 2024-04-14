import React from "react";
import { Box } from "@gluestack-ui/themed"
import { ScrollView } from "@gluestack-ui/themed";

import Productlist from '../components/productlist';
import ProductData from '../json/ProductData.json'

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#F5F7F1" }}>
      <Productlist list={ProductData.data}/>
    </ScrollView>

  );
};

export default HomeScreen;
