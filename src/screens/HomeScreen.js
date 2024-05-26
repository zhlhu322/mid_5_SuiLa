import React, { useState, useEffect }  from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { Dropdown } from 'react-native-element-dropdown';

import Productlist from '../components/Productlist';
import ProductData from '../json/ProductData.json';


const data = [
  { label: '為您推薦', value: '1' },
  { label: '價格低至高', value: '2' },
  { label: '價格高至低', value: '3' },
];

const HomeScreen = () => {
  const [value, setValue] = useState(null);
  const [sortedProductData, setSortedProductData] = useState([]);
  
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
    <ScrollView style={{ backgroundColor: "#F5F7F1" }}>
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
      />
      <Productlist list={sortedProductData}/>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  dropdown:{
    backgroundColor:'white',
    width:110,
    height:30,
    marginTop:10,
    marginLeft:25,
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
  }
});

export default HomeScreen;
