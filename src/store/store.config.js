import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  // Store creation
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // without redux-thunk
    composeEnhancers(applyMiddleware(thunk))                                         // with redux-thunk
  );

  return store;
}
