import React from "react";
import { FlatList,Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from "../../components/UI/HeaderButton";
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

ProductOverview.navigationOptions = navData => {
  return {
    headerTitle: "All Products",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {
          navData.navigation.navigate('Cart');
         }} />
      </HeaderButtons>
    ),
  };
};

export default ProductOverview;
