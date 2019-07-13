const router = require('express').Router();
const booksContoller = require('../../controllers/booksController');

router.route('/')
    .get(booksContoller.findAll)
    .post(booksContoller.create);

router.route('/:id')
    .get(booksContoller.findById)
    .put(booksContoller.update)
    .delete(booksContoller.remove);

module.exports = router;