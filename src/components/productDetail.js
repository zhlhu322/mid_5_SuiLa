import React from "react";
import { Box, VStack, Text, Image, Pressable, Center } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";



const ProductDetail = ({ product }) => {
  const { navigate } = useNavigation();

  return (
    <Box
      width={150} height={190} elevation={1} marginBottom={20}
    >
      <VStack justifyContent="space-around">
        <Pressable onPress={() => navigate('Detail', product)}>
          <Image
            width={150} height={150}
            source={{ uri: product.image }}
            alt="ProductImage"
          />
        </Pressable>
        <VStack height={40} justifyContent="space-evenly">
          <Text fontSize={12} fontFamily="Roboto_500Medium" color="black">{product.name}</Text>
          <Text fontSize={12} fontFamily="Roboto_500Medium" color="black" opacity={0.5}>{product.price}</Text>
        </VStack>

      </VStack>
    </Box>
  );
}


export default ProductDetail;
