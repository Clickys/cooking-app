import axios from 'axios';

export default class Recipe {
    constructor( id ) {
        this.id = id;
    }

    async getRecipe() {
        const response = await axios(
            `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=3f2643d59bfdcb97251f88b0a9513314&rId=${
                this.id
            }`,
        );
        console.log( response.data );
        this.recipe = await response.data.recipe;
    }
}
