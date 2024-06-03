import React from "react";
import { Box } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import ProductDetail from '../components/ProductDetail';
import { StyleSheet, View,Text } from "react-native";
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favoritesSlice';



const FavoriteScreen = () => {
    const favorites = useSelector(selectFavorites);
    const darkMode = useSelector((state) => state.theme.darkMode);

    
    const renderItem = ({ item }) => (
        <Box marginRight={40} marginBottom={20}>
            < ProductDetail product={item} />
        </Box>
    )
    
    return (
        <View style={darkMode ? styles.darkContainer : styles.lightContainer}>
        <ScrollView>
            <Box marginLeft={25}  height="100%" mt={40} >
                <FlatList
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                />
            </Box>
        </ScrollView>
        </View>
            

    );
}
const styles = StyleSheet.create({
    
    darkContainer: {
      backgroundColor: '#D1D1C0',
      flex: 1,
    },
    lightContainer: {
      backgroundColor: '#F5F7F1',
      flex: 1,
    },
});
export default FavoriteScreen;
