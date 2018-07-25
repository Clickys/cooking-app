import { DOMElements } from './base';

const ingredientsObject = new Map();
ingredientsObject.set( 'cup', '<i class="fas fa-coffee"></i>' );
ingredientsObject.set( 'cups', '<i class="fas fa-coffee"></i>' );
ingredientsObject.set( 'tablespoons', '<i class="fas fa-utensil-spoon"></i>' );
ingredientsObject.set( 'teaspoon', '<i class="fas fa-utensil-spoon"></i>' );
ingredientsObject.set( 'teaspoons', '<i class="fas fa-utensil-spoon"></i>' );

export const clearRenderRecipe = () => {
    DOMElements.recipeResults.innerHTML = '';
};

const addMessures = ing => ing
    .split( ' ' )
    .map( ( el ) => {
        if ( ingredientsObject.has( el ) ) {
            return ingredientsObject.get( el );
        }
        return el;
    } )
    .join( ' ' );

export const createIng = ing => `
        <li class="list-group-item list-ing text-left">
            <i class="far fa-circle"></i> ${ addMessures( ing ) }
        </li>
        `;

export const renderRecipe = ( recipe ) => {
    const ingSize = recipe.ingredients.length / 2;
    const markup = `
    <div class="card">
    <img src="${ recipe.image_url }" alt="" class="card-img-top" width="200" height="200">
    <h3 class="ing-title text-center">
        <span>${ recipe.title }</span>
    </h3>
    <div class="recipe-like mb-5 mx-auto d-flex align-items-center justify-content-center">
        <i class="far fa-heart fa-2x"></i>
    </div>
    <div class="card-body">
        <div class="ingredients-body">
            <div class="row recipe-card-details">
                <div class="col-6">
                    <ul class="list-group list-group-flush">
                        ${ recipe.ingredients
        .slice( 0, ingSize )
        .map( el => createIng( el ) )
        .join( '' ) }

                    </ul>
                </div>
                <div class="col-6">
                <ul class="list-group list-group-flush">
                ${ recipe.ingredients
        .slice( ingSize )
        .map( el => createIng( el ) )
        .join( '' ) }
                </ul>
                </div>
            </div>

        </div>
    </div>
</div>
    `;
    DOMElements.recipeResults.insertAdjacentHTML( 'afterbegin', markup );
};
