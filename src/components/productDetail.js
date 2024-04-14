import React from "react";
import { Box, VStack, Text, Image, Pressable, Center } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";


const ProductDetail = ({ product }) => {
  const { navigate } = useNavigation();

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
          <Text fontSize={14}  color="black">{product.title}</Text>
          <Text fontSize={14}  color="black" opacity={0.5}>{product.price}</Text>
        </VStack>

      </VStack>
    </Box>
  );
}


export default ProductDetail;
