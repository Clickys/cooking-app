export const renderRandomQote = ( { name, quote } ) => {
    const quoteTextPosition = document.querySelector( '.quote-text' );
    const quoteAuthorPosition = document.querySelector( '.quote-text-author' );

    quoteTextPosition.textContent = '';
    quoteAuthorPosition.textContent = '';

    quoteTextPosition.textContent = quote;
    quoteAuthorPosition.textContent = name;
};
