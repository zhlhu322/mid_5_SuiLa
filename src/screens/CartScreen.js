import React, { useState, useEffect } from 'react';
import { ScrollView, Box, Text, HStack, VStack, Image, View} from "@gluestack-ui/themed";
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Center } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemSize } from '../redux/cartSlice';
import { selecttoPay, checktoPay, removePay } from '../redux/paySlice';


const data = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
];

const RenderDropdown = ({ item }) => {
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
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        setCheckedItems(new Array(cartItems.length).fill(false));
    }, [cartItems.length]);

    const CustomBackButton = () => {
        const navigation = useNavigation();

        const handleBackPress = () => {
            navigation.goBack();
        };

        return (
            <TouchableOpacity
                onPress={handleBackPress}
                style={{
                    marginBottom: 10,
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

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    const renderItem = ({ item, index }) => (
        <Box style={styles.box}>
            <Checkbox
                style={styles.checkbox}
                value={checkedItems[index]}
                onValueChange={() => handleCheckboxChange(index)}
                color={checkedItems[index] ? '#6A6A36' : undefined}
            />
            <Image
                style={styles.image}
                source={{ uri: item.image }}
            />
            <VStack style={{ marginLeft: 10, paddingTop: 20, marginBottom: 20 }}>
                <Box style={{ justifyContent: 'space-between', width: 180 }}>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>{item.title}</Text>
                </Box>
                <RenderDropdown item={item} />
                <HStack style={{ justifyContent: 'space-between', marginTop: 23 }}>
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
        <View style={{flex:1}}>
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
            <Box style={styles.buttonBox}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 24, color: "white" }}>結帳</Text>
                </TouchableOpacity>
            </Box>
            
        </View>

    );

};

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'white',
        width: 50,
        height: 25,
        borderRadius: 5
    },
    placeholder: {
        fontSize: 14,
        color: 'black',
        paddingLeft: 5
    },
    container: {
        borderRadius: 10,
        width: 110,
    },
    item: {
        fontSize: 14,
    },
    selectedText: {
        marginLeft: 5
    },
    box: {
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 15,
        backgroundColor: '#D8D8C7',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 20
    },
    checkbox: {
        marginLeft: 10,
        backgroundColor: "#F5F7F1",
        borderColor: "#F5F7F1",
        alignSelf: 'center'
    },
    button: {
        position: 'absolute',
        width: 150,
        height: 50,
        backgroundColor: "#6A6A36",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:20
    },
    buttonBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CartScreen;


