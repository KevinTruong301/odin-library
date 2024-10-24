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
function CreateCard(index, author, title, numPages){
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

    let removeButton = document.createElement('button');
    removeButton.className = "remove-button";
    removeButton.textContent = "REMOVE";
    removeButton.addEventListener('click', RemoveElement);
    removeButton.cardElement = cardElement;
    removeButton.cardIndex = index;
    

    cardElement.appendChild(titleElement);
    cardElement.appendChild(authorElement);
    cardElement.appendChild(numPagesElement);
    cardElement.appendChild(removeButton);

    booksGridElement.appendChild(cardElement);
    
}

function RemoveElement(evt)
{
    console.log(evt.currentTarget.index);
    myLibrary.splice(evt, 1);
    booksGridElement.removeChild(evt.currentTarget.cardElement);
    console.log(myLibrary);

}


function PopulateCardGrid(){
    let index = 0;
    myLibrary.forEach(book => {
        CreateCard(index, book.author, book.title, book.numPages);
        index += 1;
    });
}

PopulateCardGrid();


let dialog = document.getElementById("dialog");
let newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

let titleInput = document.querySelector("#title-input");
let authorInput = document.querySelector("#author-input");
let pagesInput = document.querySelector("#pages-input");
let infoForm = document.querySelector("#info-form");
function CreateBook(){
    AddBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value))
    booksGridElement.textContent = "";
    PopulateCardGrid();
    infoForm.reset();
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', CreateBook);

