import React, { useState, useEffect } from 'react';
import { ScrollView, Box, Text, HStack, VStack, FlatList, Image, View } from "@gluestack-ui/themed";
import { TouchableOpacity, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Alert as RNAlert } from 'react-native'; // 引入React Native的Alert組件
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectitems } from '../redux/paySlice';
import coupons from "../json/Coupon.json";



const CheckOutScreen = () => {
    const selecteditems = useSelector(selectitems);
    const [searchText, setSearchText] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [discountedAmount, setDiscountedAmount] = useState(null); // 折扣後的金額
    const { navigate } = useNavigation();
    const navigation = useNavigation();


    useEffect(() => {
        // 計算總額
        let total = 0;
        selecteditems.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalAmount(total);
    }, [selecteditems]);

    const applyCoupon = () => {
        const coupon = coupons.data.find(c => c.code === searchText);
        if (coupon) {
            const discount = coupon.discount;
            const newTotal = totalAmount * discount;
            setDiscountedAmount(newTotal);
            RNAlert.alert("折價券使用成功!")
        } else {
            setDiscountedAmount(null); // 如果没有找到匹配的优惠券，重置折扣后的金额
            RNAlert.alert("無效的折價券")
        }
    };

    const renderItem = ({ item }) => (
        <Box style={styles.container}>
            <HStack style={styles.itemcontainer}>
                <Image
                    width={90} height={90}
                    borderRadius={8}
                    alt="productImage"
                    source={{ uri: item.image }}
                />
                <VStack style={{ width: '70%', color: 'black', gap: 15 }}>
                    <Text style={styles.text}>{item.title}</Text>
                    <HStack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>{item.size}</Text>
                        <Text style={styles.text}>×{item.quantity}</Text>
                    </HStack>
                    <HStack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text> </Text>
                        <Text style={{ alignSelf: 'flex-end' }}>${item.price}</Text>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    )

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.view}>
                <Box style={{ marginTop: 30, width: '100%' }}>
                    <FlatList
                        data={selecteditems}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <Box style={styles.textinput}>
                        <TextInput
                            style={{ flex: 1, margin: 10 }}     //將TextInput設置為填滿父容器的彈性大小
                            placeholder="請輸入優惠券代碼"
                            placeholderTextColor={'#4E4E4E'}
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
                        <TouchableOpacity style={styles.couponbutton} onPress={applyCoupon}>
                            <Text style={styles.buttonText}>使用</Text>
                        </TouchableOpacity>
                    </Box>
                    <View style={styles.horizontalLine} />
                    <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <Text>總額</Text>
                        <Text>${totalAmount}</Text>
                    </HStack>
                    {discountedAmount && (
                        <Box>
                            <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text>折價券</Text>
                                <Text style={{ color: '#AE3434' }}>-{Math.round(totalAmount - discountedAmount)}</Text>
                            </HStack>
                            <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text>折扣後金額</Text>
                                <Text>${Math.round(discountedAmount)}</Text>
                            </HStack>
                        </Box>
                    )}

                    <View style={styles.horizontalLine} />
                    <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <Text>付款方式</Text>
                        <Text>貨到付款</Text>
                    </HStack>
                    <View style={styles.horizontalLine} />
                    <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <Text>寄送方式</Text>
                        <Text>7-ELEVEN</Text>
                    </HStack>
                    <HStack style={{ width: '85%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text></Text>
                        <Text>和鑫店</Text>
                    </HStack>
                    <View style={styles.horizontalLine} />
                    <Box style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            RNAlert.alert("下單成功!", "可至訂單查詢查看您的訂單",[{text:'OK',onPress:()=>navigation.navigate('Personalinfo')}])
                        }} >
                            <Text style={{ fontSize: 24, color: "white" }}>下單</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </View>
        </ScrollView>


    );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: "#F5F7F1",
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        height: '100%'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    itemcontainer: {
        gap: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between'
    },
    text: {
        color: 'black',
        fontSize: 16
    },
    textinput: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: 35,
        justifyContent: 'space-between',
        backgroundColor: '#D8D8C7',
        borderRadius: 5,
        alignSelf: 'center'
    },
    horizontalLine: {
        width: '90%',
        borderBottomColor: '#BBBBBB',
        borderBottomWidth: 1,
        marginVertical: 15,
        alignSelf: 'center'
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: "#6A6A36",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#D8D8C7',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 15,

    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    couponbutton:{
        justifyContent:'center'
    },
    buttonText:{
        color:'#0078CF',
        alignself:'center',
        marginRight:10
    }

});