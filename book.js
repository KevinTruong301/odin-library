const myLibrary = [];

function Book(author, title, numPages){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book = new Book("test", "test1", 2);

addBookToLibrary(book);

console.log(myLibrary);