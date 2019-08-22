const initialState = {
  baseCurrency: []
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_baseCurrency":
      return { baseCurrency: action.payload }

    default:
      return state;
  }
}