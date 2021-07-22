import React, { useState } from 'react'




export const AddForm = () => {

const initialStateNewRecipe = 
     0

const [stateCookedBefore, setstateCookedBefore] = useState(false)
    const [stateReview, setstateReview] = useState(initialStateNewRecipe)
         
    let reviewsRecipesAdd = '' 

    
    const handleSatteCookedBefore = ()=>{
        
     let  letStateCookedBefore = (stateCookedBefore === false) ? true : false

        setstateCookedBefore(letStateCookedBefore)
  };

    const handleStateReviewChange = ()=>{
         reviewsRecipesAdd = document.getElementById('inlineRadio1').value;

      
        setstateReview(reviewsRecipesAdd)
            
           
    }
    const handleStateReviewChange2 = ()=>{
         reviewsRecipesAdd = document.getElementById('inlineRadio2').value;

      
         setstateReview(reviewsRecipesAdd)
    }
    
    const handleStateReviewChange3 = ()=>{
        reviewsRecipesAdd = document.getElementById('inlineRadio3').value;

     
        setstateReview(reviewsRecipesAdd)
   }
   const handleStateReviewChange4 = ()=>{
        reviewsRecipesAdd = document.getElementById('inlineRadio4').value;

     
        setstateReview(reviewsRecipesAdd)
   }

    const createButom = ()=>{

        const titleRecipesAdd = document.getElementById('recipeTitleId').value;
        const preparationRecipesAdd = document.getElementById('recipePreparationId').value;

      
     console.log(stateReview, stateCookedBefore, titleRecipesAdd, preparationRecipesAdd);
 }



    return (
        <>
        <div className="addform__container__close">
            <div className="addform__container__transparent"></div>
            <div className="addform__container__sidebar">
                <div className="addform__container__title">
                    <h3> New recipe</h3>
                </div>
                <div className="addform__container__recipename">
                    <p>Recipe name</p>

                    <input 
                        id='recipeTitleId'
                        name='tile'
                        type="text"
                        placeholder="Title*"
                         
                    ></input>
                </div>
                <div className="addform__container__ingredients">
                    <p>Ingredients</p>

                </div>
                <div className="addform__container__preparation">
                    <p>Preparatíon</p>

                     <input 
                        id='recipePreparationId'
                        name='preparation'
                        type="text"
                        placeholder="Instructions*"
                    ></input>
                </div>
                 <div className="addform__container__reviews"  >
                    <p>Reviews</p>
                    <div className="form-check form-check-inline"  >
                         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={ 1 } onClick={handleStateReviewChange}/>
                         <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={ 2 } onClick={handleStateReviewChange2}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={ 3 } onClick={handleStateReviewChange3}/>
                         <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value={ 4 } onClick={handleStateReviewChange4}/>
                        <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                    </div>
                   
               
                </div>  
                <div className="addform__container__before">
                    <p>Cooked before</p>
                    <div className="form-check form-switch ">
                         <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={handleSatteCookedBefore}/>
                         <label className="form-check-label Switch__color" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                </div>
                <div className="addform__container__create" onClick={createButom}>
                    <p>Create</p>
                </div>
                
            </div>
    
        </div>
            
        </>
    )
}
