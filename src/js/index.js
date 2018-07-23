import 'babel-polyfill';
import RandomQuote from './models/famousChefQuotes';
import { renderRandomQuote } from './views/famousChefQuotesViews';
import SearchFood from './models/SearchFood';

import * as searchFoodView from './views/searchFoodView';
import {
    DOMElements,
    renderLoader,
    clearLoader,
    pressEnter,
    recipeRenderLoader,
} from './views/base';
import { renderRecipe, clearRenderRecipe } from './views/getFoodIngView';
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
            renderLoader( DOMElements.foodResults, 'food' );
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
    const id = window.location.hash.replace( '#', '' );

    clearRenderRecipe();
    // CHECK IF ID EXIST
    if ( id ) {
        try {
            renderLoader( DOMElements.recipeResults, 'recipe' );

            state.newRecipe = new Recipe( id );
            // GET RECIPE INGRIDIENTS
            await state.newRecipe.getRecipe();
            clearLoader();

            // RENDER RECIPE TO THE DOM
            renderRecipe( state.newRecipe.recipe );
        } catch ( error ) {
            console.log( error );
        }
    }
};

document.addEventListener( 'keypress', ( e ) => {
    pressEnter( e, controlSearchFood );
} );
DOMElements.searchInputIcon.addEventListener( 'click', ( e ) => {
    controlSearchFood();
} );
window.addEventListener( 'load', ( e ) => {
    const quote = new RandomQuote();
    renderRandomQuote( quote.pickRandomQuote() );
} );

window.addEventListener( 'hashchange', () => {
    controlRecipe();
} );
