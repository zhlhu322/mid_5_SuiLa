import React from 'react';
import { Box, Text, Image } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, ScrollView, Pressable, HStack } from "@gluestack-ui/themed";

const PersonalinfoScreen = () => {
  return (
    <Box direction="column">
      <Box
        height="240px"
        bg="#FEFFE6"
        justifyContent="center"
        alignItems="center"
      >
        <Box h={300} justifyContent="space-around" flexDirection="row" alignItems="center">
          <Image
            h={110}
            w={110}
            borderRadius={999}
            mt={60}
            borderWidth={1.5}
            borderColor='#C8C8A9'
            source={"https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/669189db793d9dad2ac4026b0cbfdfc7.jpg?raw=true"}
            alt='albumImage'
          />
          <Box marginLeft={20} marginTop={60}>
            <Text fontWeight='400'
              color='black'
              fontSize={23}
              lineHeight={35}
              marginLeft={10}
            >歡迎，小美
            </Text>
           
          </Box>
        </Box>
      </Box>
      <Box
        flexGrow={1}
        bg='#F5F7F1'
        alignItems="center"
        padding="20px"
        height="100%"
      >
        <HStack justifyContent="space-between" alignItems="center" mt={20}>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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
          <HStack justifyContent="space-between" alignItems="center" mt={20}>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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
            >線上客服</Text>
          </Pressable>
          <Pressable
            justifyContent="center"
            alignItems="center"
            w={80}
            h={80}
            m={10}
            backgroundColor="#FEFFE6"
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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
            onPress={() => Linking.openURL()}
            style={{
              borderRadius: 18,
              shadowColor:"#C8C8A9",
              shadowOffset:{
                width:3,height:6
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

export default PersonalinfoScreen;
