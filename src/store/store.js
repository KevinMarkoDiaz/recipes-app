import { createStore, combineReducers } from "redux";
import { addReducer } from "../reducers/addReducer";


const reducers = combineReducers({

    addScreen: addReducer

})

export const store = createStore(

    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
); 