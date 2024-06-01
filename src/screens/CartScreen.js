import React, { useState, useEffect } from 'react';
import { ScrollView, Box, Text, HStack, VStack, Image } from "@gluestack-ui/themed";
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Center } from "@gluestack-ui/themed";
import { removeFromCart, updateCartItemSize } from '../redux/cartSlice';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
];

const RenderDropdown = ({item}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(item.size);

    const changeSize = (id, selectedSize) => {
        dispatch(updateCartItemSize({ id, size: selectedSize }));
    };

    const handleDropdownChange = (selectedValue) => {
        changeSize(item.id, selectedValue.value);
        setValue(selectedValue.value);
    };
    return (
        <Dropdown
            style={styles.dropdown}
            data={data}
            placeholder={item.size}
            placeholderStyle={styles.placeholder}
            labelField="label"
            valueField="value"
            value={value}
            containerStyle={styles.container}
            activeColor="#F5F7F1"
            itemTextStyle={styles.item}
            onChange={handleDropdownChange}
            selectedTextStyle={styles.selectedText}
        />
    )
};

const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const CustomBackButton = () => {
        const navigation = useNavigation();

        const handleBackPress = () => {
            navigation.goBack();
        };

        return (
            <TouchableOpacity
                onPress={handleBackPress}
                style={{
                    margin: 10,
                    position: 'relative',
                    top: 10,
                    left: 10,
                    zIndex: 1
                }}
            >
                <MaterialCommunityIcons name="chevron-left" size={30} color="#6A6A36" />
            </TouchableOpacity>
        );
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const renderItem = ({ item }) => (
        <Box style={styles.box}>

            <Image
                style={{ width: 100, height: 100, marginTop: 20, marginLeft: 15 }}
                source={{ uri: item.image }}
            />
            <VStack style={{ marginLeft: 10, paddingTop: 20 }}>
                <Box style={{ justifyContent: 'space-between', width: 200 }}>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>{item.title}</Text>
                </Box>
                <RenderDropdown item={item}/>
                <HStack style={{ justifyContent: 'space-between', marginTop: 25 }}>
                    <Text style={{ fontSize: 16 }}>${item.price}</Text>
                    <Text style={{ fontSize: 16 }}>數量:{item.quantity}</Text>
                </HStack>
            </VStack>
            <HStack style={{ marginTop: 10, marginRight: 5 }}>
                <TouchableOpacity
                    onPress={() => handleRemoveFromCart(item.id)}>
                    <MaterialCommunityIcons name="close" size={20} color="black" />
                </TouchableOpacity>
            </HStack>

        </Box>
    );

    return (
        <ScrollView bgColor="#F5F7F1" height="100%" width="100%">
            <CustomBackButton />
            <Center>
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </Center>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'white',
        width: 80,
        height: 30,
        borderRadius: 5
    },
    placeholder: {
        fontSize: 16,
        color: 'black',
        paddingLeft: 10
    },
    container: {
        borderRadius: 10,
        width: 110,
    },
    item: {
        fontSize: 14,
    },
    selectedText:{
        marginLeft:5
    },
    box: {
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 15,
        paddingBottom: 20,
        backgroundColor: '#D8D8C7',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    }

});

export default CartScreen;


