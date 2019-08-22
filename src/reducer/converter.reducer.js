const initialState = {
  valueInputFromCurrency: 1,
  valueInputToCurrency: 1,
  idDropListCurrency: 0,
};

export const converterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_valueInputFromCurrency":
      return { ...state, valueInputFromCurrency: action.payload }
    case "set_valueInputToCurrency":
      return { ...state, valueInputToCurrency: action.payload }
    case "set_idDropListCurrency":
      return { ...state, idDropListCurrency: action.payload }
    default:
      return state;
  }
}