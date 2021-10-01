const stateContextMemo = (dispatch: any, state: any) => ({
  isLoggedIn: state.isLoggedIn,
});

export default stateContextMemo;
