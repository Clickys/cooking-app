import { DOMElements } from './base';

export const renderRandomQuote = ( { name, quote } ) => {
    clearRandomQuote();
    DOMElements.quoteText.textContent = quote;
    DOMElements.quoteTextAuthor.textContent = name;
};

function clearRandomQuote() {
    DOMElements.quoteText.textContent = '';
    DOMElements.quoteTextAuthor.textContent = '';
}
