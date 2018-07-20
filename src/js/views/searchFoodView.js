import { DOMElements } from './base';

export const getInput = () => DOMElements.searchInput.value;

export const clearInput = () => {
    DOMElements.searchInput.value = '';
};

export const clearResultsGrid = () => {
    DOMElements.recipeResults.innerHTML = '';
};

const renderRecipe = ( recipe ) => {
    const markup = `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-2 mx-auto m-sm-none">
        <div class="card food">
        <img src="${ recipe.image_url }" alt="" class="card-img-top food-img">
        <div class="card-body">
        <a href="${ recipe.recipe_id }">
                <h6 class="card-title food-title">${ recipe.title }</h6>
                <p class="card-text food-info">Food Details</p>
                </a>
            </div>
        </div>
    </div>
    `;
    DOMElements.recipeResults.insertAdjacentHTML( 'beforeend', markup );
};

export const renderResults = ( recipes ) => {
    console.log( recipes );
    recipes.slice( 0, 12 ).forEach( renderRecipe );
};
