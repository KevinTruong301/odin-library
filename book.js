const myLibrary = [];

function Book(title, author, numPages){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
}

function AddBookToLibrary(book){
    myLibrary.push(book);
}

AddBookToLibrary(new Book("test", "test1", 1));
AddBookToLibrary(new Book("test2", "test2", 2));
AddBookToLibrary(new Book("test3", "test3", 3));
AddBookToLibrary(new Book("test4", "test4", 4));
AddBookToLibrary(new Book("test5", "test5", 5));
AddBookToLibrary(new Book("test6", "test16",6));

let booksGridElement = document.querySelector("#books-grid")
function CreateCard(title, author, numPages){
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



function PopulateCardGrid(){
    myLibrary.forEach(book => {
        CreateCard(book.title, book.author, book.numPages);
    });
}

PopulateCardGrid();

function CreateBook(){
    AddBookToLibrary(new Book("test", "test1", 1));
    CreateCard("test", "test1", 1);
}

let newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', CreateBook);
