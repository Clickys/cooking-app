import { DOMElements } from './base';

export const getInput = () => DOMElements.searchInput.value;

export const clearInput = () => {
    DOMElements.searchInput.value = '';
};

export const clearResultsGrid = () => {
    DOMElements.foodResults.innerHTML = '';
};

const renderRecipe = ( recipe ) => {
    const markup = `
    <div class="col-6 mb-2">
    <a href="#${ recipe.recipe_id }">
        <div class="card food bg-transparent">
            <img src="${ recipe.image_url }" alt="${
    recipe.image_url
}" class="card-img-top img-thumbnail food-img">
            <div class="card-body d-flex flex-column justify-content-between recipe-main-body">
                <h5 class="card-title food-title small text-center mb-4">${ editRecipeTitle(
        recipe.title,
    ) }</h5>
                <p class="card-text food-info small text-center recipe-publisher">
                    ${ recipe.publisher }
                </p>
            </div>
        </div>
    </a>
</div>
    `;
    DOMElements.foodResults.insertAdjacentHTML( 'beforeend', markup );
};

export const renderResults = ( recipes ) => {
    recipes.slice( 0, 8 ).forEach( renderRecipe );
};

// Remove parenthesis and text between -  and shrink title to less than 17 chars
const editRecipeTitle = ( title ) => {
    const newTitle = [];
    if ( title.length > 17 ) {
        // check recipe length
        title
            .replace( / *\([^)]*\) */g, '' ) // remove parenthesis and the text between
            .split( ' ' )
            .reduce( ( acc, cur, index ) => {
                if ( acc < 17 ) {
                    newTitle.push( cur );
                    return ( acc += cur.length );
                }
            }, 0 );
        return newTitle.join( ' ' ).toUpperCase();
    }
    return title;
};

const editRecipePublisher = ( publisher ) => {
    const newPublisher = [];
    if ( publisher.length > 14 ) {
        // check recipe length
        publisher
            .replace( / *\([^)]*\) */g, '' ) // remove parenthesis and the text between
            .split( ' ' )
            .reduce( ( acc, cur ) => {
                if ( acc <= 14 ) {
                    //
                    newPublisher.push( cur );
                    return ( acc += cur.length );
                }
            }, 0 );
        return newPublisher.join( ' ' );
    }
    return publisher;
};
