import React, { useState, useEffect } from 'react';
import { Linking, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, ScrollView, Box, Text, Pressable, HStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { selectLike, setLike, toggleLike } from '../redux/likeSlice';

import { selectFavorites, addFavorite, removeFavorite } from '../redux/favoritesSlice';


const ProductScreen = ({ route }) => {
    const { title, image, price, img1, img2, img3, img4 } = route.params;

    const likeicon = useSelector(selectLike);  //取得state
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const CustomBackButton = () => {
        const navigation = useNavigation();

        const handleBackPress = () => {
            navigation.goBack();
        };

        return (
            <TouchableOpacity 
            onPress={handleBackPress}
            style={{
                position: 'absolute',
                top: 10,            
                left: 10,           
                zIndex: 1            
            }}
        >
            <MaterialCommunityIcons name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        );
    };

    const isFavorite = favorites.some(item => item.title === title);
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite({ title }));
        } else {
            dispatch(addFavorite({ title, image, price }));
        }
    };


    //useEffect(()=>{ dispatch(setLike({likeicon}))}, likeicon );

    return (
        <Center bgColor="white" height="100%">
            <CustomBackButton/>
            <ScrollView bgColor='#F5F7F1' w='100%' h='100%'>
            
                <Center>
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: image }}

                    />


                    <HStack justifyContent="space-between" alignItems="center">
                        <Box mt={5} width="70%" >
                            <Text
                                mt={10}
                                color='#131313'
                                textAlign='left'
                                fontSize={20}
                                lineHeight={28}
                                fontWeight='450'
                            >{title}</Text>
                            <Text
                                color='#131313'
                                textAlign='left'
                                fontSize={16}
                                fontWeight='350'
                                lineHeight={24}
                                opacity={0.5}
                            >{price}</Text>
                        </Box>
                        <Pressable onPress={toggleFavorite}>
                            <MaterialCommunityIcons
                                name={isFavorite ? 'heart' : 'heart-outline'}
                                color='#6A6A36'
                                size={30}
                                marginRight={5}
                            />
                        </Pressable>
                    </HStack>
                    <HStack justifyContent="center" mt={20} spacing={0}
                        style={{
                            shadowColor: "#C8C8A9",
                            shadowOffset: {
                                width: 0, height: 4
                            },
                            shadowRadius: 2,
                            shadowOpacity: 0.3,
                        }}
                    >
                        <Pressable
                            justifyContent="center"
                            w={150}
                            h={36}
                            backgroundColor="#FEFFE6"
                            onPress={() => Linking.openURL()}
                            style={{
                                borderTopLeftRadius: 18,
                                borderBottomLeftRadius: 18,
                                borderWidth: 1,
                                borderRightWidth: 0.5,
                                borderColor: '#C8C8A9'
                            }}
                        >
                            <Text
                                color="#000000"
                                textAlign='center'
                                fontSize={12}
                                fontWeight='500'
                                lineHeight={16}
                                letterSpacing={1.2}
                            >Add to cart</Text>
                        </Pressable>
                        <Pressable
                            justifyContent="center"
                            w={150}
                            h={36}
                            backgroundColor="#FEFFE6"
                            onPress={() => Linking.openURL()}
                            style={{
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                borderWidth: 1,
                                borderLeftWidth: 0.5,
                                borderColor: '#C8C8A9'
                            }}
                        >
                            <Text
                                color="#000000"
                                textAlign='center'
                                fontSize={12}
                                fontWeight='500'
                                lineHeight={16}
                                letterSpacing={1.2}
                            >Buy now!</Text>
                        </Pressable>
                    </HStack>
                    <Box mt={5} width="75%">
                        <Text
                            mt={15}
                            mb={-5}
                            color='#6A6A36'
                            textAlign='left'
                            fontSize={16}
                            lineHeight={28}
                            fontWeight='400'
                        >·. ･ ｡⁺   ๋₊ ▾ ⋆ ⑅ ▸◂  ྀྀི 實拍  ྀྀི  · ⁺     ִִֶָ ٠˟ ⋆ ⑅ ▸◂ ࿔*</Text>
                    </Box>
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: img1 }}
                    />
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: img2 }}
                    />
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: img3 }}
                    />
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: img4 }}
                    />

                </Center>
            </ScrollView>
        </Center>
    );
};

export default ProductScreen;
