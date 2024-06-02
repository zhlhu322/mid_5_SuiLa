import React, { useState } from 'react';
import { HStack } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Animated,TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const HomeHeaderIcon = () => {
    const [showSearch, setShowSearch] = useState(false); // 是否顯示搜尋欄
    const [searchText, setSearchText] = useState('');    // 用戶輸入的內容
    const [HstackWidth, setHStackWidth] = useState(70);  // 設定header上的icon組合(magnify,cart)的寬度
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const { navigate } = useNavigation();

    const handlePress = () => {
      setShowSearch(true);     //顯示搜尋欄
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 900,
        useNativeDriver: false,
      }).start();
      setHStackWidth(170);     //修改HStack的數值讓搜尋欄不會擠到購物車的button
    };
  
    const handleClear = () => {
      setShowSearch(false);
      setSearchText('');
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
      setHStackWidth(70);
    };
  
    return (
      <HStack width={HstackWidth} justifyContent='space-between'>
        {showSearch ? (
          <Animated.View style={{ width: 130, height: 26, borderRadius: 5, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, transform: [{ scaleX: animatedValue }] }}>
            <TextInput
              style={{ flex: 1 }}     //將TextInput設置為填滿父容器的彈性大小
              placeholder="Search"
              value={searchText}
              onChangeText={text => setSearchText(text)}
              autoFocus               //自動獲得焦點、彈出鍵盤
              onSubmitEditing={() => {
                // 在提交時執行搜索相關操作
              }}
            />
            <MaterialCommunityIcons name="close-circle" color='#6A6A36' size={20} onPress={handleClear} />
          </Animated.View>
        ) : (
          // 當 showSearch 為 false 時，渲染 magnify 按鈕
          <MaterialCommunityIcons name="magnify" color='#6A6A36' size={26} onPress={handlePress} />
        )}
        <MaterialCommunityIcons name="cart" color='#6A6A36' size={26} onPress={() => navigate('Cart')} />
      </HStack>
    );
  };


  export default HomeHeaderIcon;