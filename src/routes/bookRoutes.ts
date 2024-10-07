import { Router } from 'express';
import { BookController } from '../controllers/bookController';

const router = Router();

router.get('/books', BookController.getAvailableBooks);
router.post('/borrow', BookController.borrowBook);
router.post('/return', BookController.returnBook);

export default router;
