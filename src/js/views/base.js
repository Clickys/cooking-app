import foodLoader from '../../images/food-loader.svg';

import recipeLoader from '../../images/recipe-loader.svg';

export const DOMElements = {
    quoteText: document.querySelector( '.quote-text' ),
    quoteTextAuthor: document.querySelector( '.quote-text-author' ),
    searchInput: document.querySelector( '.search-input' ),
    foodResults: document.querySelector( '.food-result' ),
    recipeResults: document.querySelector( '.recipe-result' ),
    searchInputIcon: document.querySelector( '.search-input-icon' ),
};

export const renderLoader = ( parent, cookImg ) => {
    let loaderSVG;
    cookImg === 'food' ? ( loaderSVG = foodLoader ) : ( loaderSVG = recipeLoader );
    const markup = `
        <div class="col-8 mx-auto d-flex justify-content-center align-items-center  loader">
            <svg>
                <use href="${ loaderSVG }#Layer_1"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML( 'afterbegin', markup );
};

export const clearLoader = () => {
    const loader = document.querySelector( '.loader' );
    if ( loader ) loader.parentElement.removeChild( loader );
};

export const recipeRenderLoader = () => {
    const markup = ` <img src="${ recipeLoader }" class="img-fluid recipeLoader">`;
    DOMElements.recipeResults.insertAdjacentHTML( 'afterbegin', markup );
};
recipeLoader;
export const pressEnter = ( e, fn ) => {
    if ( e.keyCode === 13 ) {
        if ( DOMElements.searchInput.value ) {
            fn();
        }
    }
};
