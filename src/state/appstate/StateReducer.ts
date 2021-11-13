import axiosInstance from "../data/axiosInstance";

const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_NEW_STORE":
      const stores = state.myStores;
      stores.push(action.payload);
      return {
        ...state,
        myStores: stores,
      };

    case "ADD_MY_STORES":
      return {
        ...state,
        myStores: action.payload,
        loadingStores: false,
      };
    case "NO_STORE":
      return {
        ...state,
        stores: [],
      };
    case "TOGGLE_STORE_LOADING":
      return {
        ...state,
        loadingStores: !state.loadingStores,
      };

    case "ADD_MY_PRODUCTS":
      return {
        ...state,
        myProducts: action.payload,
        productLoading: false,
      };

    case "ADD_PRODUCT":
      let myProducts = state.myProducts;
      myProducts.push(action.payload);
      return {
        ...state,
        myProducts,
      };

    case "LOADING_PRODUCTS":
      return {
        ...state,
        productLoading: true,
      };

    case "UPDATE_PRODUCT":
      const items = state.myProducts;
      const productToUpdate = items.filter(
        (product: any) => product.id === action.id
      )[0];
      const index = state.myProducts.indexOf(productToUpdate);
      if (index > -1) {
        items.splice(index, 1);
      }
      items.push(action.payload);
      return {
        ...state,
        myProducts: items,
      };

      case "RESTORE_CACHE":

    default:
      return {
        ...state,
      };
  }
};

export default stateReducer;
