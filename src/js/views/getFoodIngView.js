import { DOMElements } from './base';

export const clearRenderRecipe = () => {
    DOMElements.recipeResults.innerHTML = '';
};
export const createIng = ing => `
        <li class="list-group-item list-ing">
            <i class="far fa-circle"></i> ${ ing }
        </li>
        `;

const addMessures = ( ing ) => {};
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
