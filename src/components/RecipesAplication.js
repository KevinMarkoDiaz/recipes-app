import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import { App1 } from './App1'



export const RecipesAplication = () => {





    
    return (
        <>
        <Provider store={store}>

            <App1/>

        </Provider>  
        </>
    )
}
