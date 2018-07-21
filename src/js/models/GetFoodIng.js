import axios from 'axios';

export default class getFoodIng {
    constructor( id ) {
        this.id = id;
    }

    async getFood() {
        const response = await axios(
            'https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=3f2643d59bfdcb97251f88b0a9513314&rId=47025',
        );
        console.log( response );
    }
}
