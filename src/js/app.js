import { randomQuote } from './models/famousChefQuotes';
import { renderRandomQote } from './views/famousChefQuotesViews';

window.addEventListener( 'load', ( e ) => {
    renderRandomQote( randomQuote );
} );
