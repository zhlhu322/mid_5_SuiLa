import React from "react";
import { Text, Center, Box } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import ProductDetail from '../components/productDetail';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favoritesSlice';



const FavoriteScreen = () => {
    const favorites = useSelector(selectFavorites);
    
    const renderItem = ({ item }) => (
        <Box marginRight={40} marginBottom={20}>
            < ProductDetail product={item} />
        </Box>
    )
    
    return (
        <ScrollView style={{backgroundColor: "#F5F7F1"}}>
            <Box marginLeft={25}  height="100%" mt={40} >
                <FlatList
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                />
            </Box>
        </ScrollView>
            

    );
}

export default FavoriteScreen;
