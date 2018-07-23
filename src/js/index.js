import 'babel-polyfill';
import RandomQuote from './models/famousChefQuotes';
import { renderRandomQuote } from './views/famousChefQuotesViews';
import SearchFood from './models/SearchFood';

import * as searchFoodView from './views/searchFoodView';
import {
    DOMElements, renderLoader, clearLoader, pressEnter,
} from './views/base';
import Recipe from './models/GetFoodIng';

const state = {};

const controlSearchFood = async () => {
    // get search value from input
    const searchQuery = searchFoodView.getInput();

    searchFoodView.clearInput();
    searchFoodView.clearResultsGrid();
    if ( searchQuery ) {
        try {
            // search for food
            state.search = new SearchFood( searchQuery );
            renderLoader( DOMElements.recipeResults );
            // add to state the recipes
            await state.search.getFood();
            // clear loader
            clearLoader();
            // render recipes
            searchFoodView.renderResults( state.search.recipes );
        } catch ( error ) {
            console.log( `${ error } something is wrong` );
        }
    }
};
const controlRecipe = async () => {
    const id = location.hash.replace( /#/, '' );

    if ( id ) {
        // CREATE NEW OBJECT WITH THE CLICKED RECIPE
        state.newRecipe = new Recipe( id );

        // CHECK IF NEW RECIPE EXIST
        try {
            // IF NEW  RECIPE EXIST ADD TO STATE THE RECIPE
            await state.newRecipe.getRecipe();
            console.log( state.newRecipe );

            // RENDER RECIPE TO THE DOM
        } catch ( error ) {
            console.log( error );
        }
    }
};

DOMElements.searchInputIcon.addEventListener( 'click', ( e ) => {
    controlSearchFood();
} );
window.addEventListener( 'load', ( e ) => {
    const quote = new RandomQuote();
    renderRandomQuote( quote.pickRandomQuote() );
} );

document.addEventListener( 'keypress', ( e ) => {
    pressEnter( e, controlSearchFood );
} );

DOMElements.recipeResults.addEventListener( 'click', ( e ) => {
    if ( e.target.closest( '.food' ) ) {
        controlRecipe();
    }
} );
