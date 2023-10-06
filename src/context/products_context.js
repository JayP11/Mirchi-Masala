import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { useUserContext } from "../context/user_context";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  //load all product
  products_loading: false,
  produts_error: false,
  products: [],
  //featured product
  featured_products: [],
  //Trending product
  trending_products: [],
  //single product
  single_product_loading: false,
  single_product_error: false,
  single_product: "",
  // userid:0,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { userid } = useUserContext();
  //using reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //sidebar functions
  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      const products = response.data.data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  //fetch single product api
  const fetchSingleProduct = async (url) => {
    console.log("singleproduct ", url);
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      // const singleProduct = response.data.data;
      const singleProduct = response.data.records;
      console.log("singleproduct-->response ", singleProduct);

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  // use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}${userid}`);
    //  fetchProducts(`${url}`);
  }, []);

  // const getProId = () => {
  //   let proid = localStorage.getItem("proid");
  //   if (proid) {
  //     return JSON.parse(localStorage.getItem("proid"));
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <ProductsContext.Provider
      value={{ ...state, openSideBar, closeSideBar, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
