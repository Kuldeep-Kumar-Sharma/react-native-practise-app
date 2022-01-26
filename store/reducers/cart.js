import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updateOrnewCartItem;
            if (state.items[addedProduct.id]) {
                //already in the cart
                updateOrnewCartItem= new CartItem(state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice);
            } else {
                updateOrnewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);   
            }
            return {
                 //not needed here coping of old state
               ...state,
               items: {
                 ...state.items,
                 [addedProduct.id]: updateOrnewCartItem,
               },
               totalAmount: state.totalAmount + prodPrice,
             };
    }
  return state;
};
