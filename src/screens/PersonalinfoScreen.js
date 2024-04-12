import React from 'react';
import { Box, Text, Image } from '@gluestack-ui/themed';

const PersonalinfoScreen = () => {
  return (
    <Box direction="column">
      <Box
        height="240px"
        bg="#FEFFE6"
        justifyContent="center"
        alignItems="center"
      >
        <Box h={230} justifyContent='center' flexDirection="row" alignItems="center">
          <Image
            h={110}
            w={110}
            borderRadius={999}
            mb={0}
            source={require("../assets/669189db793d9dad2ac4026b0cbfdfc7.jpg")}
            alt='albumImage'
          />
          <Box marginLeft={10}>
          <Text fontWeight='500'
            color='#6A6A36'
            fontSize={25}
            lineHeight={35}
            marginLeft={10}
          >小美，
          </Text> 
          <Text fontWeight='500'
            color='#6A6A36'
            fontSize={25}
            lineHeight={35}
            marginLeft={10}
          >
          歡迎回來
          </Text> 
          </Box>
        </Box>
      </Box>
      <Box
        flexGrow={1}
        bg='#F5F7F1'
        alignItems="center"
        padding="20px"
      >
      </Box>
    </Box>
  );
};

export default PersonalinfoScreen;
