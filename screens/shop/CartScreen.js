import React from "react";
import { View,Text,FlatList,StyleSheet,Button } from "react-native-web";
import { useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";

const CartScreen = props => { 
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => { 
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
              productId: key,
              productTitle: state.cart.items[key].productTitle,
              productPrice: state.cart.items[key].productPrice,
              quantity: state.cart.items[key].quantity,
              sum: state.cart.items[key].sum,
            });
        }
        return transformedCartItems;
    });
  
    return (
      <View style={styles.screem}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total:{" "}
            <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
          </Text>
          <Button
            color={Colors.accent}
            title="Order Now"
            disabled={cartItems.length === 0}
          />
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={itemData => <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.title}
            amount={itemData.item.sum}
            onRemove={()=>{}}
          />}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
  },
    amount: {
      color: Colors.primary
  },
});

export default CartScreen;