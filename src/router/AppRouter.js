import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {LoginScreen} from '../components/LoginScreen';
import { RecipesAplication } from '../components/RecipesAplication';


export const AppRouter = () => {
    return (
        <Router>
         
            
            <div>
               <Switch>
                   
                   <Route exact path="/login" component={LoginScreen}/>
                   <Route exact path="/" component={RecipesAplication}/>
                   
           
                </Switch>
            </div> 
           
          
        </Router>
      );
}
