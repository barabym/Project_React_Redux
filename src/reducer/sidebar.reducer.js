const initialState = {
  baseCurrency: [],
  filterWord: "",
  selectedCurrency: {},
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_baseCurrency":
      return { ...state, baseCurrency: action.payload }
    case "set_filterWord":
      return { ...state, filterWord: action.payload }
    case "set_selectedCurrency":
      return { ...state, selectedCurrency: action.payload }
    default:
      return state;
  }
}