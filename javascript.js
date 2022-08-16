let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.reportBook = function (){
    let isRead = this.read===true ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
}

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, true);

console.log(theHobbit.reportBook());
myLibrary.push(theHobbit);




function addBookToLibrary() {
    let bookCard = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookDescription = document.createElement('div');
    bookTitle.classList.add()
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookDescription);

    let temp = new Book (title, author, pages, read)
    myLibrary.push(temp)

    form.style.display = 'none';
  }

const container = document.querySelector('#books-container');
const form = document.querySelector('form')

const formCaller = () => {
    form.style.display = 'grid';
}