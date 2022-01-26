import React from "react";
import { FlatList,Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/products';

const ProductOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) =>
        <ProductItem
          image={item.data.imageUrl}
          price={item.data.title}
          title={item.data.title}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
          onViewDetails={() => {
          props.navigation.navigate({ routeName: 'ProductDetail' }, {
          productId: itemData.item.id,
          productTitle: itemData.item.title});
        } }/>}
    />
  );
};

export default ProductOverview;
