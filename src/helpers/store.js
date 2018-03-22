import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const middleware = [];
middleware.push(thunk);
// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }


export default createStore(reducers, applyMiddleware(...middleware));
