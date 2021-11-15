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

    case "ADD_SUPPLIERS":
      return {
        ...state,
        suppliers: action.payload,
        supplierLoading: false,
      };
    case "SUPPLIERS_LOADING":
      return {
        ...state,
        supplierLoading: true,
      };

    case "ADD_SUPPLIER":
      const suppliers = [...state.suppliers];
      suppliers.push(action.payload);
      return {
        ...state,
        suppliers: suppliers,
      };

    case "ADD_TRANSFERS":
      return {
        ...state,
        transfers: action.payload,
      };

    case "ADD_TRANSFER":
      const data = state.transfers || [];
      data.push(action.payload);
      return {
        ...state,
        transfers: data,
      };

    case "ADD_COLLECTIONS":
      return {
        ...state,
        collections: action.payload,
      };

    case "ADD_GIFTCARDS":
      return {
        ...state,
        giftCards: action.payload,
      };

    case "ADD_GIFTCARD":
      const g = state.giftCards || [];
      g.push(action.payload);
      return {
        ...state,
        giftCards: g,
      };

    case "ADD_COLLECTION":
      const c = state.collections || [];
      c.push(action.payload);
      return {
        ...state,
        collections: c,
      };

    default:
      return {
        ...state,
      };
  }
};

export default stateReducer;
