import express from 'express';
import * as bookController from '../controllers/book.controller';
import { isAdmin, isSuperadmin, requireAuth } from '../middleware/authMiddleware';

const bookRouter = express.Router();

bookRouter.get('/', bookController.listBooks);
bookRouter.get('/:id', bookController.findById);
bookRouter.get('/search/:query', bookController.searchBooks);

bookRouter.put('/update/:id', bookController.updateBook);
bookRouter.post('/add', bookController.addBook);
bookRouter.post('/loan/:bookId', bookController.loanBook);
bookRouter.put('/unloan/:bookId',requireAuth,isAdmin, bookController.unloanBook);

bookRouter.delete('/remove/:id', bookController.removeById);

export default bookRouter;
