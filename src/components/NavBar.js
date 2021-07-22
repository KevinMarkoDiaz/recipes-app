import React from 'react'

export const NavBar = () => {
    return (
        <>
            <div className="navBar__box">
                <h2 className="navBar__box__title">Kitchen Recipes</h2>
            </div>

            <div className="navBar__search">
                <div className="navBar__search__input">
                    <div className="navBar__search__input__lupa"></div>
                    <p>Search</p>

                </div>
                <div className="navBar__search__list">

                </div>
            </div>
            <div className="navBar__subti">
                <p className="navBar__subtitle__h3">Recipe name</p>
                <div className="navBar__subtitle__h4">
                    <p>Reviews</p>
                    <p className="navBar__subtitle__h4__h3">Cooked before</p>
                </div>
                
            </div>


        </>
    )
}
