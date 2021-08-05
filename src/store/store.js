import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { addReducer } from "../reducers/addReducer";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';



const reducers = combineReducers({

    addScreen: addReducer,
    auth: authReducer

})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(

    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    
); 