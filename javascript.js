let myLibrary = [];
///book object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.reportBook = function (){
    let isRead = this.read==="on" ? "already read" : "not finished yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
}

//add books to array

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let temp = new Book(title, author, pages, read);
    myLibrary.push(temp);
    displayBooks()  
  }
// iterate array and display books 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const container = document.querySelector('.books-container');




function displayBooks() {
    removeAllChildNodes(container);
    for (i=0; i<myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        let bookTitle = document.createElement('div');
        let bookDescription = document.createElement('div');
        let buttonContainer = document.createElement('div');
        let statusChange = document.createElement('button');
        let deleteBook = document.createElement('button');
        container.appendChild(bookCard);
        bookCard.classList.add('book-card');
        bookTitle.classList.add('book-title');
        deleteBook.classList.add('delete-book');
        deleteBook.setAttribute('id',i);
        statusChange.setAttribute('id',i);
        statusChange.classList.add('status-change');
        buttonContainer.classList.add('button-container');
        bookTitle.textContent = myLibrary[i].title;
        bookDescription.classList.add('book-description');
        bookDescription.textContent = myLibrary[i].reportBook();
        deleteBook.textContent = "Delete book";
        statusChange.textContent = "Change read status";
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(buttonContainer);
        buttonContainer.appendChild(statusChange);
        buttonContainer.appendChild(deleteBook);
    };   
}

// Display form when clicking add button

const form = document.querySelector('form')

const formCaller = () => {
    form.style.display = 'grid';
}
//Hide when clicking x
const formHidder = () => {
    form.style.display = 'none';
}

const x = document.querySelector(".x-reset");
x.addEventListener('click', formHidder);

//delete book

const onClick = (event) => {
    const isDelete = event.target.classList.contains('delete-book');
    const isStatus = event.target.classList.contains('status-change');
    if (isDelete ) {
        let instance = event.target.id;
        myLibrary.splice(instance,1)
        displayBooks();
    } else if (isStatus) {
        let instance = event.target.id;
        if (myLibrary[instance].read==="on") {
            myLibrary[instance].read="off";
            displayBooks();
        } else {
            myLibrary[instance].read="on";
            displayBooks();
        }
        displayBooks();
    }   
}    
window.addEventListener('click', onClick);

//change read status


//first book
const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "on");
myLibrary.push(theHobbit);
displayBooks();