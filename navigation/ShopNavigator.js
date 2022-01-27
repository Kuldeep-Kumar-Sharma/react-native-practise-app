import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import ProductOverview from "../screens/shop/ProductOverview";
import Colors from "../constants/Colors";
import ProductDetails from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/CartScreen";
const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverview,
    ProductDetails: ProductDetails,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductNavigator);
