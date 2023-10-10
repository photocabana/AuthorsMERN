const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.get('/api/allAuthors', AuthorController.findAllAuthors);
    app.get('/api/oneAuthor/:id', AuthorController.findOneSingleAuthor);
    app.post('/api/newAuthor', AuthorController.createAuthor);
    app.patch('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}
