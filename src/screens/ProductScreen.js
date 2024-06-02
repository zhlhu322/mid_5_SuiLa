import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Linking, Image, Modal, View, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, ScrollView, Box, Text, Pressable, HStack, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { selectFavorites, addFavorite, removeFavorite } from '../redux/favoritesSlice';

const ProductScreen = ({ route }) => {
    const { title, image, price, size_chart, img1, img2, img3, img4 } = route.params;
    const { navigate } = useNavigation();
    
    
    const personalinfo = useSelector((state) => state.personalinfo);

    const dispatch = useDispatch();
    const nickname = personalinfo.nickname || '水水';
    const [recommendedSize, setRecommendedSize] = useState('M');
    const favorites = useSelector(selectFavorites);
    const [cart_modalVisible, setModalVisible] = useState(false); //控制購物車選單是否出現
    const [BuyNow_modalVisible, setModal2Visible] = useState(false); //控制立即購買選單是否出現
    const [selectedSize, setSelectedSize] = useState('S'); //儲存選擇的尺寸
    const [quantity, setQuantity] = useState('1'); //儲存選擇的數量
    const cart_toggleModal = () => {
        setModalVisible(!cart_modalVisible); //切換購物車選單的顯示及隱藏
    };
    const BuyNow_toggleModal = () => {
        setModal2Visible(!BuyNow_modalVisible); //切換購物車選單的顯示及隱藏
    };
    
    const navigation = useNavigation();

    const navigateToCart = () => {
        BuyNow_toggleModal();
        navigation.navigate('Cart');
    };
    
    const addToCartHandler = () => {
        const product = {
            id: new Date().getTime().toString(),
            title,
            image,
            price,
            size: selectedSize,
            quantity
        };
        dispatch(addToCart(product));
        cart_toggleModal();
        
    };
    const BuyNowHandler = () => {
        const product = {
            id: new Date().getTime().toString(),
            title,
            image,
            price,
            size: selectedSize,
            quantity
        };
        dispatch(addToCart(product));
        navigateToCart();
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
            dispatch(addFavorite({ title, image, price, img1, img2, img3, img4, size_chart }));
        }
    };
    useEffect(() => {
        const { nickname } = personalinfo;
        const { height, weight } = personalinfo;
        if (height > 170 && weight > 55 || height > 178 || weight > 65) {
            setRecommendedSize('L');
        } else if (height < 160 && weight < 50 || height < 150 || weight < 45) {
            setRecommendedSize('S');
        } else {
            setRecommendedSize('M');
        }
    }, [personalinfo]);


    return (
        <Center bgColor="white" height="100%">
            <CustomBackButton />
            <ScrollView bgColor='#F5F7F1' w='100%' h='100%'>
                <Center>
                    <Image
                        style={{ height: 300, width: 300, marginTop: 20 }}
                        source={{ uri: image }}
                        alt='productImg'
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
                                color='#6A6A36'
                                textAlign='left'
                                fontSize={16}
                                fontWeight='400'
                                lineHeight={24}
                            >${price}</Text>
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



                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={cart_modalVisible}
                        onRequestClose={cart_toggleModal}
                    >
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <Center flex={1} justifyContent="flex-end">
                                <View style={{
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    padding: 10,
                                    paddingBottom: 40,
                                }}>
                                    <TouchableOpacity
                                        onPress={cart_toggleModal}
                                        style={{ position: 'absolute', top: 10, right: 10 ,marginRight:5 }}
                                    >
                                        <MaterialCommunityIcons name="close" size={24} color="black" />
                                    </TouchableOpacity>
                                    
                                    <Text fontSize={16} mt={10}>選擇尺寸</Text>
                                    <Text mt={10} color="#6A6A36"
                                       fontSize={14}>✩推薦{nickname}的尺寸：{recommendedSize}</Text>
                                    <Picker
                                        selectedValue={selectedSize}
                                        onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
                                        style={{ marginTop: 5 }}
                                    >
                                        <Picker.Item label="S" value="S" />
                                        <Picker.Item label="M" value="M" />
                                        <Picker.Item label="L" value="L" />
                                    </Picker>
                                    <Text>選擇數量</Text>
                                    <Picker
                                        selectedValue={quantity}
                                        onValueChange={(itemValue, itemIndex) => setQuantity(itemValue)}
                                        style={{ marginTop: 10 }}
                                    >
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                    </Picker>
                                    <Pressable onPress={addToCartHandler} style={{ marginTop: 25 ,alignItems:'flex-end' , marginRight:15 }}>
                                        <Text style={{ color: '#007BFF' }}>加入購物車</Text>
                                    </Pressable>
                                </View>
                            </Center>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={BuyNow_modalVisible}
                        onRequestClose={BuyNow_toggleModal}
                    >
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <Center flex={1} justifyContent="flex-end">
                                <View style={{
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    padding: 20,
                                    paddingBottom: 40,
                                }}>
                                    <TouchableOpacity
                                        onPress={BuyNow_toggleModal}
                                        style={{ position: 'absolute', top: 10, right: 10 }}
                                    >
                                        <MaterialCommunityIcons name="close" size={24} color="black" />
                                    </TouchableOpacity>
                                    
                                    <Text fontSize={16}>選擇尺寸</Text>
                                    <Text mt={10} color="#6A6A36"
                                       fontSize={14}>✩推薦{nickname}的尺寸：{recommendedSize}</Text>
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
                                    <Picker
                                        selectedValue={quantity}
                                        onValueChange={(itemValue, itemIndex) => setQuantity(itemValue)}
                                        style={{ marginTop: 10 }}
                                    >
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                    </Picker>
                                    <Pressable onPress={BuyNowHandler} style={{ marginTop: 25 ,alignItems:'flex-end' , marginRight:15 }}>
                                        <Text style={{ color: '#007BFF' }}>立即購買</Text>
                                    </Pressable>
                                </View>
                            </Center>
                        </View>
                    </Modal>
                    
                    <HStack justifyContent="center" mt={20} spacing={0}  //大按鈕
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
                            onPress={cart_toggleModal}
                            style={{
                                borderTopLeftRadius: 18,
                                borderBottomLeftRadius: 18,
                                borderWidth: 1,
                                borderRightWidth: 0.5,
                                borderColor: '#C8C8A9'
                            }}
                        >
                            <Text
                                color="#6A6A36"
                                textAlign='center'
                                fontSize={14}
                                fontWeight='500'
                                lineHeight={16}
                                letterSpacing={1.2}
                            >加入購物車</Text>
                        </Pressable>
                        <Pressable
                            justifyContent="center"
                            w={150}
                            h={36}
                            backgroundColor="#FEFFE6"
                            onPress={BuyNow_toggleModal}
                            style={{
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                borderWidth: 1,
                                borderLeftWidth: 0.5,
                                borderColor: '#6A6A36',
                                backgroundColor:'#6A6A36'
                            }}
                        >
                            <Text
                                color="#FEFFE6"
                                textAlign='center'
                                fontSize={14}
                                fontWeight='500'
                                lineHeight={16}
                                letterSpacing={1.2}
                            >立即購買</Text>
                        </Pressable>
                    </HStack>


                    <Box mt={5} width="75%">
                        <Pressable onPress={() => navigate('camera')}>
                            <HStack alignItems='center' mt={10} gap={5}>
                               <MaterialCommunityIcons name='hanger' size={24} color={'#0078CF'} />
                                <Text
                                    color='#0078CF'
                                    fontSize={16}
                                    lineHeight={28}
                                    fontWeight='400'
                                >線上試衣間</Text> 
                            </HStack>
                        </Pressable>

                        <Text
                            mt={15}
                            mb={-10}
                            color='#000000'
                            textAlign='left'
                            fontSize={16}
                            lineHeight={28}
                            fontWeight='400'
                        >尺寸表</Text>
                    </Box>
                    <Image
                        style={{ height: 130, width: 300, marginTop: 20, opacity: 0.8 }}
                        source={{ uri: size_chart }}
                        alt = 'sizechart'
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
                        >. ･ ｡⁺   ๋₊ ▾ ⋆ ⑅ ▸◂  ྀྀི 實拍  ྀྀི  · ⁺    ִִֶָ ٠˟ ⋆ ⑅ ▸◂ ࿔*</Text>
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