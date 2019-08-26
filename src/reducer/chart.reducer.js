const initialState = {
  baseRangeDate: [],
  baseRangeRate: [],
  fromDate: new Date().setDate(new Date().getDate() - 14),
  endDate: new Date(),
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_baseRange':
      return { ...state, baseRangeDate: action.payload[0], baseRangeRate: action.payload[1] };
    case 'set_fromDate':
      return { ...state, fromDate: action.payload };
    case 'set_endDate':
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};

export default chartReducer;
