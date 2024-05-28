import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Linking, Image, Modal, View, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, ScrollView, Box, Text, Pressable, HStack, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { selectLike, setLike, toggleLike } from '../redux/likeSlice';

import { selectFavorites, addFavorite, removeFavorite } from '../redux/favoritesSlice';

const ProductScreen = ({ route }) => {
    const { title, image, price, size_chart, img1, img2, img3, img4 } = route.params;
    const { navigate } = useNavigation();


    const likeicon = useSelector(selectLike);  //取得state
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const [cart_modalVisible, setModalVisible] = useState(false); //控制購物車選單是否出現
    const [selectedSize, setSelectedSize] = useState(''); //儲存選擇的尺寸
    const [quantity, setQuantity] = useState(1); //儲存選擇的數量
    const cart_toggleModal = () => {
        setModalVisible(!cart_modalVisible); //切換購物車選單的顯示及隱藏
    };

    const addToCartHandler = () => {
        const product = {
            title: route.params.title,
            image: route.params.image,
            price: route.params.price,
            size: selectedSize, 
            quantity: quantity    
        };
        dispatch(addToCart(product));
        cart_toggleModal(); 
    };

    

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
            dispatch(addFavorite({ title,image,price,img1,img2,img3,img4,size_chart }));
        }
    };
    const addToCart = (product) => {
        return {
            type: 'ADD_TO_CART',
            payload: product
        };
    };

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
                                fontWeight='400'
                            >{title}</Text>
                            <Text
                                color='#131313'
                                textAlign='left'
                                fontSize={16}
                                fontWeight='400'
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
                    

                    
                    <Modal //以下是購物選單框框
                        animationType="slide"
                        transparent={true}
                        visible={cart_modalVisible}
                        onRequestClose={cart_toggleModal}
                    >
                        <Center flex={1} justifyContent="flex-end">
                            <View style={{
                                width:'100%',
                                backgroundColor: '#FFF',
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                padding: 20,
                                paddingBottom: 40,
                            }}>
                                <Text>選擇尺寸</Text>
                                <Picker
                                    selectedValue={selectedSize}
                                    onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
                                    style={{ marginTop: 10 }}
                                >
                                    <Picker.Item label="S" value="S" />
                                    <Picker.Item label="M" value="M" />
                                    <Picker.Item label="L" value="L" />
                                </Picker>
                                <Text>選擇數量</Text>
                                <TextInput
                                    value={quantity.toString()}
                                    onChangeText={text => setQuantity(parseInt(text) || 0)}
                                    keyboardType="numeric"
                                    style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 10 }}
                                />
                                <Pressable onPress={addToCartHandler} style={{ marginTop: 20 }}>
                                    <Text style={{ color: '#007BFF' }}>加入</Text>
                                </Pressable>
                            </View>
                        </Center>
                    </Modal>

                    
                    <HStack justifyContent="center" mt={20} spacing={0} //以下是加入購物車跟直接購買的按鈕
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
                            onPress={addToCartHandler}
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
                            onPress={cart_toggleModal}
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
                        <Pressable onPress={() => navigate('camera')}>
                            <Text
                                mt={15}
                                mb={-5}
                                color='#0078CF'
                                textAlign='left'
                                fontSize={16}
                                lineHeight={28}
                                fontWeight='400'
                            >線上試衣間</Text>
                        </Pressable>
                        
                        <Text
                            mt={15}
                            mb={-5}
                            color='#000000'
                            textAlign='left'
                            fontSize={16}
                            lineHeight={28}
                            fontWeight='400'
                        >尺寸表</Text>
                    </Box>
                    <Image
                        style={{ height: 130, width: 300, marginTop: 20,opacity:0.8 }}
                        source={{ uri: size_chart }}
                    />
                    
                    <Box mt={5} width="75%">
                        <Text
                            mt={15}
                            mb={-5}
                            color='#6A6A36'
                            textAlign='center'
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