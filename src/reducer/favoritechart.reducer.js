const initialState = {
  favoriteSelectedCurrency: {},
  favoriteBaseRangeDate: [],
  favoriteBaseRangeRate: [],
  favoriteFromDate: new Date().setDate(new Date().getDate() - 19),
  favoriteEndDate: new Date(),
};

const favoriteChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_favoriteSelectedCurrency':
      return { ...state, favoriteSelectedCurrency: action.payload };
    case 'set_favoriteBaseRange':
      return {
        ...state,
        favoriteBaseRangeDate: action.payload[0],
        favoriteBaseRangeRate: action.payload[1],
      };
    case 'set_favoriteFromDate':
      return { ...state, favoriteFromDate: action.payload };
    case 'set_favoriteEndDate':
      return { ...state, favoriteEndDate: action.payload };
    default:
      return state;
  }
};

export default favoriteChartReducer;
