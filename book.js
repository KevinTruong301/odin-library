const myLibrary = [];

function Book(author, title, numPages){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(new Book("test", "test1", 1));
addBookToLibrary(new Book("test2", "test2", 2));
addBookToLibrary(new Book("test3", "test3", 3));
addBookToLibrary(new Book("test4", "test4", 4));
addBookToLibrary(new Book("test5", "test5", 5));
addBookToLibrary(new Book("test6", "test16",6));

let booksGridElement = document.querySelector("#books-grid")
function createCard(author, title, numPages){
    let cardElement = document.createElement('div');
    cardElement.className = "card";

    let titleElement = document.createElement('p');
    titleElement.className = "title";
    titleElement.textContent = title;

    let authorElement = document.createElement('p');
    authorElement.className = "author";
    authorElement.textContent = author;
    
    let numPagesElement = document.createElement('p');
    numPagesElement.className = "num-pages";
    numPagesElement.textContent = numPages;

    cardElement.appendChild(titleElement);
    cardElement.appendChild(authorElement);
    cardElement.appendChild(numPagesElement);

    booksGridElement.appendChild(cardElement);
}

console.log(myLibrary);


createCard("The lion", "forgot name", 77);