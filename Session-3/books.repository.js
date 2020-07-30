const fs = require('fs');
const path = './books.model.json'
const books = JSON.parse(fs.readFileSync(path, 'utf8'));

findAll = () => books;

filter = (searchBy = {}) => {
    const { id, title, series, release } = searchBy;
    let filteredBooks = books;

    if (id) filteredBooks = filteredBooks.filter(book => book.id == id);
    if (title) filteredBooks = filteredBooks.filter(book => book.title === title);
    if (series) filteredBooks = filteredBooks.filter(book => book.series === series);
    if (release) filteredBooks = filteredBooks.filter(book => book.release == release);

    if (!filteredBooks.length) throw new Error('Book not found');
    return filteredBooks;
}

find = (searchBy = {}) => {
    return filter(searchBy).find(book => book);
}

insert = (book) => {
    const id = Math.max(...books.map(book => book.id)) + 1;
    const newBook = {
        id,
        ...book
    }
    books.push(newBook)
    fs.writeFileSync(path, JSON.stringify(books));
    return books;
}

delete_ = (id) => {
    const index = books.findIndex(book => book.id == id);
    if (index === -1) throw new Error('ID_NOT_FOUND');
    books.splice(index, 1)
    fs.writeFileSync(path, JSON.stringify(books))
    return books;
}

update = (id, body) => {
    const book = find({ id });
    Object.assign(book, body, { id: book.id });
    fs.writeFileSync(path, JSON.stringify(books));
    return book;
}

module.exports = {
    findAll,
    filter,
    find,
    insert,
    delete: delete_,
    update
}