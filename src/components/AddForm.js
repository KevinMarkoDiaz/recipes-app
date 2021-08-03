import React, {    useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeAddScreen } from '../actions/addRecipe';




export const AddForm = () => {

const dispatch = useDispatch();

const handleCloseScreen = () =>{
    const titleRecipesAdd = document.getElementById('recipeTitleId').value;
    const preparationRecipesAdd = document.getElementById('recipePreparationId').value;
    
    console.log(stateReview, stateCookedBefore, titleRecipesAdd, preparationRecipesAdd, ingredientsListButom);

    dispatch(closeAddScreen())

};
 


//useState ingredients list
const   ingredientsLisInitialState = [];
const [ingredientsListButom, setingredients] = useState(ingredientsLisInitialState)




const handleAddingredient = ()=>{
    
   const imputIngredient = document.getElementById('addform__container__ingredients__listAdd__imput__value').value;
    
    setingredients([...ingredientsListButom,imputIngredient ]);
    document.getElementById('addform__container__ingredients__listAdd__imput__value').value = ''
    
    
};
const handleRemoveingredient = () => {
    ingredientsListButom.pop()
    setingredients([...ingredientsListButom])
};






const initialStateNewRecipe =  0

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
                        autoComplete="off"
                         
                    ></input>
                </div>
                <div className="addform__container__ingredients">
                   <div><p>Ingredients</p></div> 
                        <div className="addform__container__ingredients__list">
                        
                        {
                            
                           
                             ingredientsListButom.map((ingredient)=>{

                                

                                return (
                                <div    className="addform__container__ingredients__list__container"
                                        key={ingredient.toString() }
                                >
                                    <div   className="addform__container__ingredients__listAdd__imput"
                                        type="text"
                                
                                    >
                                        {ingredient}
                                    </div>
                           
                                  
                                </div>
                                    
                                        )
                            } )
 
                        }
                        
                     
                        </div>




                        <div className="addform__container__ingredients__listAdd">
                            <input className="addform__container__ingredients__listAdd__imput"
                                    placeholder="ingredient add"
                                    name="ingredientaadd"
                                    type="text"
                                    id="addform__container__ingredients__listAdd__imput__value"
                                    autoComplete="off"
                                >

                            </input>
                            <div className="addform__container__ingredients__listAdd__button">
                            <i className="fas fa-plus-circle"
                                onClick={handleAddingredient}
                            ></i>
                            </div>
                            <div className="addform__container__ingredients__list__button">
                                    <i className="fas fa-minus-circle"
                                    onClick={handleRemoveingredient}></i>
                                    </div>
                        </div>
                </div>
                <div className="addform__container__preparation">
                    <p>Preparatíon</p>

                     <input 
                        id='recipePreparationId'
                        name='preparation'
                        type="text"
                        placeholder="Instructions*"
                        autoComplete="off"
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
                <div className="addform__container__create" onClick={ handleCloseScreen}>
                    <p>Create</p>
                </div>
                
            </div>
    
        </div>
            
        </>
    )
}
