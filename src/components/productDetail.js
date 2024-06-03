import React from "react";
import { Box, VStack, Image, Pressable, Center } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View,Text } from "react-native";
import { useSelector } from 'react-redux';


const ProductDetail = ({ product }) => {
  const { navigate } = useNavigation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Box
      width={150} height={220} elevation={1}
    >
      <VStack justifyContent="space-around"
        style={{
          shadowColor:"#C8C8A9",
          shadowOffset:{
            width:3,height:2
          },
          shadowRadius: 4,
          shadowOpacity: 0.4,
        }}
      >
        <Pressable onPress={() => navigate('Detail', product)}>
          <Image
            width={150} height={150}
            source={{ uri: product.image }}
            alt="ProductImage"
            borderRadius={8}
          />
        </Pressable>
        <VStack height={60} justifyContent="space-evenly">
          <Text fontSize={14} style={darkMode ? styles.darkText : styles.lightText} >{product.title}</Text>
          <Text fontSize={14}  style={darkMode ? styles.darkText : styles.lightText} opacity={0.5}>${product.price}</Text>
        </VStack>

      </VStack>
    </Box>
  );
}
const styles = StyleSheet.create({
  darkText: {
    color: '#565632',
  },
  lightText: {
    color: '#000000',
  },

});


export default ProductDetail;
