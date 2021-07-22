import {types} from '../types/types'


const initialStateRecipesReducer = [

    {
        
        
    }

];



export const recipesReducer = (state = initialStateRecipesReducer, action) => {
    switch (action.type) {
        case types.addRecipe:
            return [
                ...state,{
                    id: new Date().getTime(),
                    title: 'Sudado de pollo 2',
                    cookedBefore: false,
                    reviews: 2
                }
            ]
            
            break;
    
        default:
            break;
    }
}
