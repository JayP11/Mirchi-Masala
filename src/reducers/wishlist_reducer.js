import {
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  LOAD_PRODUCTS_WISHLIST,
} from "../actions";

const wishlist_reducer = (state, action) => {

  if (action.type === LOAD_PRODUCTS_WISHLIST) {
    return {
      ...state,
      all_products: [...action.payload],
      // wishlist_product: [...action.payload],

    };
  }
  if (action.type === GET_WISHLIST) {
    const { all_products } = state;
    let tempProducts = [...all_products];
    tempProducts = tempProducts.filter(
      (product) => product.is_wishlist
    );
    
    return { ...state, wishlist_product: tempProducts };

  }
  // add to wishlist reducer
  if (action.type === ADD_TO_WISHLIST) {

    const  singleProduct  = action.payload;
    
    return { ...state, wishlist_product: [...state.wishlist_product, singleProduct] }

   
  }
  // remove from cart reducer
  if (action.type === REMOVE_WISHLIST) {
    const tempCart = state.wishlist_product.filter((item) => item.id !== parseInt(action.payload));
    return { ...state, wishlist_product: tempCart };

  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wishlist_reducer;
