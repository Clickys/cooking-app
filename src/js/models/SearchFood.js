import axios from 'axios';

export default class SearchFood {
    constructor( search ) {
        this.search = search;
    }

    async getFood() {
        const response = await axios(
            `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=3f2643d59bfdcb97251f88b0a9513314&q=${
                this.search
            }`,
        );
        this.recipes = response.data.recipes;
    }
}
