import { CameraView, useCameraPermissions} from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Center } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  //可切換前後鏡頭
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <Center style={styles.containimgnbutton}>
          <Image
            style={styles.img}
            width={400} height={400}
            source={{ uri: "https://github.com/zhlhu322/mid_5_SuiLa/blob/master/assets/01887672800-e1-removebg-preview.png?raw=true" }}
            alt="ProductImage"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button2} onPress={ ()=> { navigation.goBack();} }>
              <Text style={styles.text}>返回</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>切換鏡頭</Text>
            </TouchableOpacity>
          </View>
        </Center>
       
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  containimgnbutton:{
    display:'flex',
    flexDirection:'column',
    gap:100
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    justifyContent:'space-between'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    marginTop:100
  }
});