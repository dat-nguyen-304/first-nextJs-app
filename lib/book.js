import fs from "fs";
import path from "path";

const bookDir = path.join(process.cwd(), 'books');
export const getBooks = () => {
    const bookFilenames = fs.readdirSync(bookDir);
    const booksData = bookFilenames.map(bookFilename => {
        const fullBookPath = path.join(bookDir, bookFilename);
        const bookContent = fs.readFileSync(fullBookPath, 'utf8');
        return {
            bookName: bookFilename.replace(/\.txt$/, ''),
            bookContent
        }
    });
    return booksData;
}