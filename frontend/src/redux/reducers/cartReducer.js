const initialState = {
  cartItems: [],
  shippingAddress: [],
  paymentMethod:''
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      console.log("hello cart");
      const item = action.payload;

      // Check if the item already exists in the cart
      const existItem = state.cartItems.filter(
        (x) => x.product == item.product
      )[0];
      console.log(existItem, state);

      if (existItem) {
        // If the item exists, update its quantity or details
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product == item.product ? item : x
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item], // Use state.cartItems here
        };
      }

    case "CART_REMOVE_ITEM":
      // Remove an item from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case "CART_SAVE_SHIPPING_ADDRESS":
      // Remove an item from the cart
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case "CART_SAVE_PAYMENT_METHOD":
      // Remove an item from the cart
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      // Return the current state if no action matches
      return state;
  }
};

export default cartReducer;
