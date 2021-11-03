import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import productReducer from '../reducers/productReducer'
import authReducer from '../reducers/autReducer';
import thunkMiddleware from 'redux-thunk';
import  { createLogger } from 'redux-logger';

const reducer = combineReducers({
    products: productReducer,
    users: authReducer
})


  
const loggerMiddleware = createLogger();
const initialState = {};

const enhancers = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


const store = createStore(
        reducer, 
        initialState,
        enhancers

    );


export default store;