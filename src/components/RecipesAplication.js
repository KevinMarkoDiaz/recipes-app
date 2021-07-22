import React from 'react'
import { Provider } from 'react-redux'
import { RecipesScreen } from './RecipesScreen'
import {store} from '../store/store'



export const RecipesAplication = () => {





    
    return (
        <>
        <Provider store={store}>

            <RecipesScreen/>

        </Provider>  
        </>
    )
}
