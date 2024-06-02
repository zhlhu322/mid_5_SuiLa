import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ScrollView, Box, Text, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNickname, setHeight, setWeight, setBirthday } from '../redux/profileSlice';
import { setPersonalinfo} from '../redux/personalinfoSlice';

const ProfileScreen = () => {
    const personalinfo = useSelector((state) => state.personalinfo); 
    const [name, setName] = useState(personalinfo.name);
    const [nickname, setNickname] = useState(personalinfo.nickname);
    const [height, setHeight] = useState(personalinfo.height);
    const [weight, setWeight] = useState(personalinfo.weight);
    const [birthday, setBirthday] = useState(personalinfo.birthday);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleNavigate = () => {
        dispatch(setPersonalinfo({ name, nickname, height, weight, birthday }));
        navigation.navigate('Personalinfo');
    };
    useEffect(() => {
        setName(personalinfo.name);
        setNickname(personalinfo.nickname);
        setHeight(personalinfo.height);
        setWeight(personalinfo.weight);
        setBirthday(personalinfo.birthday);
    }, [personalinfo]);




    return (
        <ScrollView style={styles.scrollview}>
            <Box style={{ alignItems: 'center', justifyContent: 'center', margin: 15, padding: 30, width: 360, backgroundColor: '#D8D8C7', borderRadius: 20 }}>
                <Text style={{ fontSize: 20, color: "#4E4E4E", marginBottom: 25 }}>會員資料</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>姓名：</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="請輸入姓名"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>暱稱：</Text>
                    <TextInput
                        style={styles.input}
                        value={nickname}
                        onChangeText={setNickname}
                        placeholder="請輸入暱稱"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>身高：</Text>
                    <TextInput
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight}
                        placeholder="請輸入身高"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>體重：</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight}
                        placeholder="請輸入體重"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>生日：</Text>
                    <TextInput
                        style={styles.input}
                        value={birthday}
                        onChangeText={setBirthday}
                        placeholder="請輸入生日"
                    />
                </View>
            </Box>
            <Pressable onPress={handleNavigate} style={{
                marginLeft: 120,
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
        
             }}>
                <Text style={{ fontSize: 20, color: "white" }} >儲存</Text>
            </Pressable>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: "#F5F7F1",
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    inputContainer: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 30,
    },
    label: {
        marginRight: 10,
        backgroundColor: '6A6A36',
    },
    input: {
        flex: 1,
        fontSize: 20,
        padding: 8,
    },
});

export default ProfileScreen;
