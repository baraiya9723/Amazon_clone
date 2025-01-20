import axios from 'axios';

export const addToCart = (data,qty) => {
    // const { data } = await axios.get(`/api/products/${id}`);
    console.log(data)
    const cartItem = {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        qty,
    };
    console.log(cartItem,'cartitem')
    return {
      type: 'CART_ADD_ITEM',
      payload:cartItem
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: 'CART_REMOVE_ITEM',
      payload: id,
    };
  };

  export const saveShippingAddress = (data) => {
    return{
      type: "CART_SAVE_SHIPPING_ADDRESS",
      payload: data 
    }
  };

  export const savePaymentMethod = (data) => {
    return{
      type: "CART_SAVE_PAYMENT_METHOD",
      payload: data 
    }
  };  
  