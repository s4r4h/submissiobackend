const { saveBookHandler, getAllBooksHandler, getBookByIdHandler, editBookbyIdHandler, deleteBookByIdHandler } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: saveBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/book/{bookId}',
        handler: editBookbyIdHandler,
    },
    {
        method: 'DELETE',
        path: '/book/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;