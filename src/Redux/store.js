import {createStore, applyMiddleware} from 'redux';
import rootReducers from './rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import wsMiddleware from '../Middleware/SocketMiddleware';

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk,wsMiddleware)));
export default store;