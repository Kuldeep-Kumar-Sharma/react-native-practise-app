import React from "react";
import { FlatList,Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from '../../components/shop/ProductItem';

const ProductOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ProductItem image={item.data.imageUrl} price={item.data.title} title={item.data.title} onAddToCart={ }/>}
    />
  );
};

export default ProductOverview;
