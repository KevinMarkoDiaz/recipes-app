import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  import {LoginScreen} from '../components/LoginScreen';
  import { RecipesScreen } from '../components/RecipesScreen';
  import { startCheking } from '../actions/auth';


export const AppRouter = () => {
   
   const dispatch = useDispatch()

   useEffect(() => {
       
    dispatch(startCheking());

   }, [dispatch])
   
    return (
        <Router>
         
            
            <div>
               <Switch>
                   
                   <Route exact path="/login" component={LoginScreen}/>
                   <Route exact path="/" component={RecipesScreen}/>
                   
           
                </Switch>
            </div> 
           
          
        </Router>
      );
}
