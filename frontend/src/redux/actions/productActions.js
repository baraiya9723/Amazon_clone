import axios from "axios";

// Action to start fetching products
export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST'
  });
  
  // Action when products are fetched successfully
  export const fetchProductsSuccess = (products) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products
  });
  
  // Action when an error occurs while fetching products
  export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  });


// Thunk action for fetching products from the API

export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());
      console.log("done")
      try {
        const response = await axios.get('http://localhost:8000/api/products'); // Replace with your API URL
        console.log(response.data)
        dispatch(fetchProductsSuccess(response.data));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };