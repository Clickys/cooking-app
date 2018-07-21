import 'babel-polyfill';
import RandomQuote from './models/famousChefQuotes';
import { renderRandomQuote } from './views/famousChefQuotesViews';
import SearchFood from './models/SearchFood';

import * as searchFoodView from './views/searchFoodView';
import {
    DOMElements, renderLoader, clearLoader, pressEnter,
} from './views/base';
import GetFoodIng from './models/GetFoodIng';

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

const x = new GetFoodIng( 12 );

x.getFood();
