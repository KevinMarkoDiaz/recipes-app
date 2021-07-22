import React from 'react'
import { LogoBar } from "./LogoBar"
import { Rectangle } from "./Rectangle";
import {NavBar} from './NavBar'
import {ListRecipes} from './ListRecipes'
import { AddForm } from "./AddForm";

import { useSelector } from "react-redux";

export const RecipesScreen = () => {
    
const state = useSelector(state => state.addScreen)
  
console.log(state);

  
  return (
      <div>

{


(state === true ) 
?<AddForm/> 
: console.log('add screen closed')
}

          <div className="recipesScreen__extend">
            <LogoBar/>

            <div className="recipes__article">
              <Rectangle/>
              <div className="recipes__article__section">
                <NavBar/>
                <ListRecipes/>
              </div>
            </div>
          </div>
          
    

      </div>
    );
}

   /* {


  (state = true ) 
  ?<AddForm/> 
  : console.log('add screen closed')
  }*/    

  