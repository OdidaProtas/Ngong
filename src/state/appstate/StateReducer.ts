const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "BUSINESSES":
      return {
        ...state,
        businesses: [],
      };

    case "HAS_STORE":
      return {
        ...state,
        hasStore: true,
        stores: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default stateReducer;
