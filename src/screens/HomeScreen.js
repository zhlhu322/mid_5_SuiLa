import React from "react";
import { Box } from "@gluestack-ui/themed"
import { ScrollView } from "@gluestack-ui/themed";

import Productlist from '../components/productlist';

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#F5F7F1" }}>
      <Productlist />
    </ScrollView>

  );
};

export default HomeScreen;
