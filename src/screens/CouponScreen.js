import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ScrollView, Box, Text, HStack, VStack, Image } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { Alert as RNAlert } from 'react-native'; // 引入React Native的Alert組件

import coupon from "../json/Coupon.json";

const Couponlist = () => {
    const renderItem = ({ item }) => (
        <CouponDetail coupon={item} />
    )
    return (
        <FlatList
            data={coupon.data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    );
}

const CouponDetail = ({ coupon }) => {

    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(coupon.code);
        setCopiedText(coupon.code)
        RNAlert.alert("SuiLa", "已將優惠代碼複製到剪貼簿");
    };

    return (
        <Box>
            <Box style={styles.container}>
                <VStack>
                    <HStack style={{ justifyContent: "space-between", alignContent: '' }}>
                        <Text style={styles.couponcode}>{coupon.code}</Text>
                        <Pressable onPress={copyToClipboard}><Text style={{ fontSize: 14 }}>複製代碼</Text></Pressable>
                    </HStack>
                    <Text style={{ fontSize: 16 }}>{coupon.title}</Text>
                    <Text style={{ fontSize: 14, marginTop: 35 }}>{coupon.desc}</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>{coupon.date}</Text>
                </VStack>
            </Box>
        </Box>
    )
}

const CouponScreen = () => {

    return (
        <ScrollView style={styles.scrollview}>
            <Box style={{ alignItems: 'center', marginVertical: 15 }}>
                <Text style={{ fontSize: 16, color: "#4E4E4E" ,marginBottom:10 }}>在結帳頁面輸入下方優惠券代碼即可套用優惠</Text>
            </Box>
            <Couponlist/>
        </ScrollView>

    );
}

export default CouponScreen;

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: "#F5F7F1",
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
    },
    container: {
        borderWidth: 1,
        borderColor: "#D8D8C7",
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom:30,
        width: 360,
        height: 150,
        backgroundColor: "#D8D8C7",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    couponcode:{
        fontSize: 20, 
        marginBottom: 10, 
        color: "#6A6A36", 
        fontWeight: 600
    }

});