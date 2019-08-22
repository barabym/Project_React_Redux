const initialState = {
  baseRangeDate: [],
  baseRangeRate: [],
  fromDate: new Date().setDate(new Date().getDate() - 14),
  endDate: new Date(),
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_baseRangeDate":
      return { ...state, baseRangeDate: action.payload }
    case "set_baseRangeRate":
      return { ...state, baseRangeRate: action.payload }
    case "set_fromDate":
      return { ...state, fromDate: action.payload }
    case "set_endDate":
      return { ...state, endDate: action.payload }
    default:
      return state;
  }
}