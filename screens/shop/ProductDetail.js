import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
const ProductDetails = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
   
    return (
      <View>
        <Text>{selectedProduct.title}</Text>
      </View>
    );
}

ProductDetails.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
};

const styles = StyleSheet.create({

});

export default ProductDetails;