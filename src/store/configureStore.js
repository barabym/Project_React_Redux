import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export const store = createStore(rootReducer, composeWithDevTools());