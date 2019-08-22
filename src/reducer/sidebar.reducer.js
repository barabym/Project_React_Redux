const initialState = {
  filterWord: "",
  selectedCurrency: [],
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_filterWord":
      return { ...state, filterWord: action.payload }
    case "set_selectedCurrency":
      return { ...state, selectedCurrency: action.payload }
    default:
      return state;
  }
}