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
      };
    case "NO_STORE":
      return {
        ...state,
        stores: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default stateReducer;
