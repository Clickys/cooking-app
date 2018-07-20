export default class RandomQuote {
    constructor() {
        this.famousChefQuotes = [
            {
                name: 'Zac Posen',
                quote:
                    "I'm not a chef. But Im passionate about food - the tradition of it, cooking it, and sharing it",
            },
            {
                name: 'Gordon Ramsay',
                quote:
                    'If you want to become a great chef, you have to work with great chefs. And thats exactly what I did.',
            },
            {
                name: 'Jose Andrew',
                quote:
                    'I believe no chef becomes what he becomes without having many people influence him.',
            },
            {
                name: 'Robert Stack',
                quote: 'A great chef is an artist that I truly respect.',
            },
            {
                name: 'Elizabeth Olsen',
                quote: 'I would love to date a chef. Id probably get really fat, but I dont care.',
            },
        ];
    }

    pickRandomQuote() {
        const randomNum = Math.floor( Math.random() * 4 );
        const randomQuoteObj = this.famousChefQuotes[ randomNum ];

        return randomQuoteObj;
    }
}
