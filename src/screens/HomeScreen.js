import React, { useState, useEffect }  from "react";
import { StyleSheet, View,Text } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { Dropdown } from 'react-native-element-dropdown';

import Productlist from '../components/Productlist';
import ProductData from '../json/ProductData.json';

import { useSelector } from 'react-redux';



const data = [
  { label: '為您推薦', value: '1' },
  { label: '價格低至高', value: '2' },
  { label: '價格高至低', value: '3' },
];

const HomeScreen = () => {
  const [value, setValue] = useState(null);
  const [sortedProductData, setSortedProductData] = useState([]);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    // 加載時獲取資料並排序商品
    sortProductData('1'); //預設為"為您推薦"
  }, []);
 
  const sortProductData = (sortOrder) => {
    let sortedData ;
    if (sortOrder === '1') {
      sortedData = ProductData.data.sort((a, b) => a.index - b.index); //為您推薦：依index排序，就會是json檔中的順序
    } else if (sortOrder === '2') {
      sortedData = ProductData.data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === '3') {
      sortedData = ProductData.data.sort((a, b) => b.price - a.price);
    }
    setSortedProductData(sortedData);
    setValue(sortOrder);
  };

  const handleDropdownChange = (selectedValue) => {
    sortProductData(selectedValue.value);
    //console.log("selectedValue:", selectedValue.value);
  };

  return (
    <View style={darkMode ? styles.darkContainer : styles.lightContainer}>
    <ScrollView>
      <Dropdown
        style={styles.dropdown}
        data={data} 
        placeholder="filter"
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
      <Productlist list={sortedProductData}/>
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  dropdown:{
    alignSelf:"flex-end",
    backgroundColor:'white',
    width:120,
    height:30,
    marginTop:10,
    marginRight:25,
    borderRadius:10
  },
  placeholder:{
    fontSize:16,
    color:'black',
    paddingLeft:10
  },
  container:{
    borderRadius:10,
    width:110,
  },
  item:{
    fontSize:14
  },
  selectedText:{
    marginLeft:10
  },
  darkContainer: {
    backgroundColor: '#D1D1C0',
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#F5F7F1',
    flex: 1,
  },
  darkText: {
    color: '#6A6A54',
  },
  lightText: {
    color: '#000000',
  },

});

export default HomeScreen;
