const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "BUSINESSES":
      return {
        ...state,
        businesses: [],
      };
  }
};

export default stateReducer;
