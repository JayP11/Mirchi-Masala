import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../actions";

const home_reducer = (state, action) => {
  //all home data
  if (action.type === GET_HOME_DATA_BEGIN) {
    return { ...state, home_loading: true };
  }
  if (action.type === GET_HOME_DATA_SUCCESS) {
    // const featured_products = action.payload.filter(
    //   (product) => product.featured === true
    // );
    // const trending_products = action.payload.filter(
    //   (product) => product.shipping === true
    // );
    return {
      ...state,
      home_loading: false,
      products: action.payload,
      categories: action.payload.records.browse_category,
      home_slider: action.payload.records.slider,
      // featured_products,
      // trending_products,
    };
  }
  if (action.type === GET_HOME_DATA_ERROR) {
    return { ...state, home_loading: false, home_error: true };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default home_reducer;
