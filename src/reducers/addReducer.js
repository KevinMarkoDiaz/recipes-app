import { types } from "../types/types";



export const addReducer = (state = false,    action)=>{

    switch (action.type) {
        case types.addOpen:
            
            return true
        
        case types.addClose:
            
                return false
            
        default:
            return state ;
    }


};