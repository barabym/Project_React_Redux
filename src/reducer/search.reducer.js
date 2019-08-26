const initialState = {
  filterWord: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_filterWord':
      return { ...state, filterWord: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
