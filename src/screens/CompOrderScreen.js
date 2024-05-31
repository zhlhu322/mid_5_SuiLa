import React, { useState ,useEffect }  from "react";
import { StyleSheet } from "react-native";
import { ScrollView, Box, Text, HStack, VStack,Image} from "@gluestack-ui/themed";
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from "react-native";

import OrderData from '../json/OrderData.json';

const Orderlist = ({list}) => {
  const renderItem = ({ item }) => ( 
    <Box marginRight={40} marginBottom={20}>
      < OrderDetail order={item} />
    </Box>
  )
  return (
    <Box marginLeft={25} marginTop={15} >
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}

const OrderDetail = ({ order }) => {
  return(
    <Box style={styles.itemborder}>
      <HStack style={styles.itemcontainer}>
        <Image
            width={100} height={100} 
            borderRadius={8}
            alt="productImage"
            source={{uri: order.image }}
        />
        <VStack style={{gap:15, width:220}}> 
          <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.text}>{order.title}</Text>
              <Text style={{color:'#AE3434'}}>{order.situation}</Text>
          </HStack>
          <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.text}>{order.size}</Text>
              <Text style={styles.text}>x1</Text>
          </HStack>
          <HStack style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.text}> </Text>
              <Text style={styles.text}>${order.price}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>

  )
}

const data = [
  { label: '已取消', value: '1' },
  { label: '已取貨', value: '2' },
  { label: '已退貨', value: '3' },
];

const CompOrderScreen = () =>{
  const [value, setValue] = useState(null);
  const [sortedOrder, setSortedOrder] = useState([]);

  function filterBySituation(item) {
    if(item.situation =="取消") return("1");
    if(item.situation =="完成") return("2");
    if(item.situation =="退貨") return("3");
  }

  useEffect(() => {
    // 加載時獲取資料並排序商品
    sortOrderData('1'); //預設為"為您推薦"
  }, []);

  const sortOrderData = (sortOrder) => {   //用來整理filter的函數
    let sortedData ;
    if (sortOrder === '1') {
      sortedData = OrderData.data.filter( a => filterBySituation(a) == "1")
    } else if (sortOrder === '2') {
      sortedData = OrderData.data.filter( a => filterBySituation(a) == "2")
    } else if (sortOrder === '3') {
      sortedData = OrderData.data.filter( a => filterBySituation(a) == "3")
    }
    setSortedOrder(sortedData);
    setValue(sortOrder);
  };

  const handleDropdownChange = (selectedValue) => {
    sortOrderData(selectedValue.value);
    //console.log("selectedValue:", selectedValue.value);
  };
  return (
    <ScrollView style={styles.scrollview}>
      <Dropdown
        style={styles.dropdown}
        data={data} 
        placeholder="已取消"
        placeholderStyle={styles.placeholder}
        labelField="label"
        valueField="value"
        value={value}
        containerStyle={styles.container}
        activeColor="#F5F7F1"
        itemTextStyle={styles.dpitem}
        onChange={handleDropdownChange}
      />
      <Orderlist list={sortedOrder}/>

    </ScrollView>
  
)};



export default CompOrderScreen;


const styles = StyleSheet.create({
  scrollview:{
    backgroundColor:"#F5F7F1",
    display:'flex',
    flex:'1',
    flexDirection:'column',
  },
  item:{
    borderColor:"#6A6A36",
    borderWidth:1
  },
  itemcontainer:{
    gap:10,
    marginBottom:20,
    alignItems:'center',
  },
  itemborder:{
    borderBottomWidth:1,
    borderColor:'#6A6A36'
  },
  text:{
    color:'black',
    fontSize:16
  },
  dropdown:{
    backgroundColor:'white',
    width:110,
    height:30,
    marginTop:10,
    marginLeft:260,
    borderRadius:10
  },
  placeholder:{
    fontSize:16,
    color:'black',
    paddingLeft:10
  },
  dpitem:{
    fontSize:14
  }

});
