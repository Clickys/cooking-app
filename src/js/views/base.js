import cookingImage from '../../images/food-loader.svg';

export const DOMElements = {
    quoteText: document.querySelector( '.quote-text' ),
    quoteTextAuthor: document.querySelector( '.quote-text-author' ),
    searchInput: document.querySelector( '.search-input' ),
    recipeResults: document.querySelector( '.recipes-result' ),
    searchInputIcon: document.querySelector( '.search-input-icon' ),
};

export const renderLoader = ( parent ) => {
    const markup = `
        <div class="col-8 mx-auto d-flex justify-content-center align-items-center  loader">
            <svg>
                <use href="${ cookingImage }#Layer_1"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML( 'afterbegin', markup );
};

export const clearLoader = () => {
    const loader = document.querySelector( '.loader' );
    if ( loader ) loader.parentElement.removeChild( loader );
};

export const pressEnter = ( e, fn ) => {
    if ( e.keyCode === 13 ) {
        if ( DOMElements.searchInput.value ) {
            fn();
        }
    }
};
