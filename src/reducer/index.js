import { combineReducers } from 'redux';

import generalReducer from './general.reducer';
import searchReducer from './search.reducer';
import converterReducer from './converter.reducer';
import chartReducer from './chart.reducer';
import favoriteChartReducer from './favoritechart.reducer';

const rootReducer = combineReducers({
  generalStore: generalReducer,
  searchStore: searchReducer,
  converterStore: converterReducer,
  chartStore: chartReducer,
  favoriteChartStore: favoriteChartReducer,
});

export default rootReducer;
