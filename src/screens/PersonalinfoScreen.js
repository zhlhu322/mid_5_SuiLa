import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Pressable } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HStack } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { setImageUri, removeImageUri } from '../redux/shotSlice';
import { StyleSheet, View } from "react-native";



const PersonalinfoScreen = () => {
  const { navigate } = useNavigation();
    const personalinfo = useSelector((state) => state.personalinfo);
    const { height, weight } = personalinfo;
    const nickname = personalinfo.nickname || '水水';
    const selectedImage = useSelector((state) => state.shot.uri);
    const [infoText, setInfoText] = useState(`${height || '秘密'} cm / ${weight || '秘密'} kg`);
    const [iconName, setIconName] = useState('emoticon-happy-outline');
    const darkMode = useSelector((state) => state.theme.darkMode);


    const dispatch = useDispatch();
    async function openImagePickerAsync() {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('需要許可才能訪問您的相簿！');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!pickerResult.canceled) {
        console.log("選擇的圖片 URI:", pickerResult.assets[0].uri);
        dispatch(setImageUri(pickerResult.assets[0].uri));
      }
    }
  
    useEffect(() => {
      
    }, [selectedImage]);


  
  useEffect(() => {
    if (iconName === 'emoticon-happy-outline') {
        setInfoText(`${height || '秘密'} cm / ${weight || '秘密'} kg`);
    } else {
        setInfoText('*** cm / *** kg');
    }
}, [height, weight, iconName]);

  function handleIconPress() {
    if (iconName === 'emoticon-happy-outline') {
      setInfoText('*** cm / *** kg');
      setIconName('emoticon-cool-outline');
    } else {
      setInfoText(`${height || '秘密'} cm / ${weight || '秘密'} kg`);
      setIconName('emoticon-happy-outline');
    }
  }
       
  return (
    <Box direction="column">
      <Box
        height="240px"
        bg="#FEFFE6"
        justifyContent="center"
        alignItems="center"
      >
        <Box h={200} justifyContent="space-around" flexDirection="row" alignItems="center">
        <Pressable onPress={openImagePickerAsync}>
            {selectedImage ? (
              <Image
                h={110}
                w={110}
                borderRadius={999}
                mt={60}
                borderWidth={1.5}
                borderColor='#C8C8A9'
                source={{ uri: selectedImage }}  
                alt='personalImage'
              />
            ) : (
              <Image
                h={110}
                w={110}
                borderRadius={999}
                mt={60}
                borderWidth={1.5}
                borderColor='#C8C8A9'
                source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/shot.jpg?raw=true" }}  
                alt='personalImage'
              />
            )}
          </Pressable>
          <Text fontWeight='400'
            color='black'
            fontSize={23}
            lineHeight={35}
            marginLeft={30}
            marginTop={60}
          >歡迎，{nickname}
          </Text>
        </Box>
        <HStack alignItems='center' marginBottom={10}>
          <Text
            fontWeight='400'
            color='#6A6A36'
            fontSize={16}
            lineHeight={35}
            marginRight={8}
          >{infoText}</Text>
          <MaterialCommunityIcons name={iconName} size={25} color='#6A6A36' onPress={handleIconPress} />
        </HStack>
      </Box>
      <Box
        flexGrow={1}
        bg='#F5F7F1'
        alignItems="center"
        height="100%"
        style={darkMode ? styles.darkContainer : styles.lightContainer}
      >
       
        <HStack width="100%" justifyContent="space-evenly" alignItems="center" mt={50} >
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('OrderScreen')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="truck-fast-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >訂單查詢</Text>
          </Pressable>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('CouponScreen')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="ticket-percent-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >折價券</Text>
          </Pressable>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('ProfileScreen')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="account-details-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >會員資料</Text>
          </Pressable>
        </HStack>
        <HStack width="100%" justifyContent="space-evenly" alignItems="center" mt={20}>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('Contactus')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="chat-processing-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >聯絡我們</Text>
          </Pressable>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('TOSScreen')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="clipboard-text-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >服務條款</Text>
          </Pressable>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => navigate('DisplaySettingScreen')}
            style={{
              borderRadius: 18,
              shadowColor: "#C8C8A9",
              shadowOffset: {
                width: 3, height: 6
              },
              shadowRadius: 4,
              shadowOpacity: 0.4,
            }}
          >
            <MaterialCommunityIcons name="cog-outline" size={30} />
            <Text
              color="#000000"
              textAlign='center'
              fontSize={12}
              fontWeight='500'
              lineHeight={16}
              letterSpacing={1.2}
            >設置</Text>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
    
  darkContainer: {
    backgroundColor: '#D1D1C0'
  },
  lightContainer: {
    backgroundColor: '#F5F7F1'
  },
});
export default PersonalinfoScreen;
