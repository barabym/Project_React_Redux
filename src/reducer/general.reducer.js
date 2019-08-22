const initialState = {
  baseCurrency: [],
  selectedCurrency: {},
  listFavorite: [],
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_baseCurrency":
      return { ...state, baseCurrency: action.payload }
    case "set_selectedCurrency":
      return { ...state, selectedCurrency: action.payload }
    case "set_listFavorite":
      return { ...state, listFavorite: action.payload }
    default:
      return state;
  }
}