import { Request, Response } from 'express';
import { BookModel } from '../models/bookModel';

const bookModel = new BookModel();

export class BookController {
    public static getAvailableBooks(req: Request, res: Response): void {
        const books = bookModel.getAvailableBooks();
        res.json(books);
    }

    public static borrowBook(req: Request, res: Response): void {
        const { title } = req.body;
        const success = bookModel.borrowBook(title);
        if (success) {
            res.status(200).send(`You borrowed "${title}".`);
        } else {
            res.status(400).send(`"${title}" is not available.`);
        }
    }

    public static returnBook(req: Request, res: Response): void {
        const { title } = req.body;
        const success = bookModel.returnBook(title);
        if (success) {
            res.status(200).send(`You returned "${title}".`);
        } else {
            res.status(400).send(`"${title}" was not borrowed.`);
        }
    }
}
