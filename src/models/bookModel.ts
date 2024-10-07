export interface Book {
    title: string;
    author: string;
    available: boolean;
}

export class BookModel {
    private books: Book[] = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
        { title: "1984", author: "George Orwell", available: true },
    ];

    public getAvailableBooks(): Book[] {
        return this.books.filter(book => book.available);
    }

    public borrowBook(title: string): boolean {
        const book = this.books.find(b => b.title === title);
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    }

    public returnBook(title: string): boolean {
        const book = this.books.find(b => b.title === title);
        if (book && !book.available) {
            book.available = true;
            return true;
        }
        return false;
    }
}
