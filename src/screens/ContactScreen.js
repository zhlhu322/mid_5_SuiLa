import LottieView from 'lottie-react-native';
import { Box,Text, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from 'react-native';

const ContactScreen  = () => {
return(
    <Box style={styles.container}>
        <LottieView
            source={require("../json/Animation3.json")}
            loop
            autoPlay
            style = {styles.animation}
            resizeMode="contain"
        />
        <Text style={{fontSize:16,marginBottom:8}}> 歡迎透過以下方式聯絡我們📞 </Text>
        <VStack style={styles.textcontainer}>
            <Text style={styles.text}> IG: 555_SuiLa </Text>
            <Text style={styles.text}> E-mail:suila@gmail.com </Text>
            <Text style={styles.text}> Tel: 0910-001234 </Text>
            
        </VStack>
        
    </Box>
);

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F7F1'
    },
    animation:{
       width:'60%',
       height:'40%'
    },
    text:{
        color:'black',
        fontSize:18,
        marginBottom:5,
        fontWeight:'400'
    },
    textcontainer:{
        marginTop:10,
        padding:20,
        borderRadius:10,
        backgroundColor:'#D8D8C7'
    }

});


export default ContactScreen;