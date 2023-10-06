import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/wishlist_reducer";
import axios from "axios";
import { add_wishlist_url as url } from "../utils/constants";

import {
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  LOAD_PRODUCTS_WISHLIST,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  wishlist_product: [],
  all_products: [],
  isSuccess: false,
};

const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  //products load
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS_WISHLIST, payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: GET_WISHLIST });
  }, [products]);
  //add to cart
  const addToWishlist = async (singleProduct, params, isAdd, id) => {
    try {
      const response = await axios.post(url, params, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        if (isAdd == 1) {
          dispatch({ type: ADD_TO_WISHLIST, payload: singleProduct });
        } else {
          dispatch({ type: REMOVE_WISHLIST, payload: id });
        }
      }
    } catch (error) {
      console.log("addto wishlist error", error);
    }
  };
  //remove from cart
  const removeItemWishlist = (id, params) => {};

  useEffect(() => {
    // addToWishlist(`${url}${userid}`);
  }, []);

  return (
    <WishlistContext.Provider
      value={{ ...state, addToWishlist, removeItemWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
// make sure use
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
