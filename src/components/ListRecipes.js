import React from 'react'
import { useDispatch } from "react-redux";
import { openAddScreen } from '../actions/addRecipe';


export const ListRecipes = () => {

    const dispatch = useDispatch();

    const handleAddScreen = ()=>{
        dispatch(openAddScreen());

    };





    const recipesListArr = ['Mixed Berry Melody'

    ];




    return (
        <>

       {
           recipesListArr.map((recipe)=>{
               return (
                   
         <div className="ListRecipes"
         key={recipe.toString()}
         >
         <p className="ListRecipes__title">{recipe}</p>
         <div className="ListRecipes__title__b" >
             <div className="ListRecipes__title__star">
                 <i className="fa fa-star starmp"> </i>
                 <i className="fa fa-star starmp"> </i>
                 <i className="fa fa-star starmp"> </i>
                 <i className="fa fa-star starmp"> </i>

             </div>
             
             <div className="ListRecipes__title__switch">

             <div className="form-check form-switch ">
  <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label Switch__color" htmlFor="flexSwitchCheckDefault"></label>
</div>

             </div>
         </div>
         
     </div>
     
               )
           })
       }

<div className="ListRecipes__button" onClick={handleAddScreen}>
    <div className="ListRecipes__button__add" >
        <p>+</p>
        </div>
</div>

        </>
    )
}
