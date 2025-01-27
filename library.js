const myLibrary = []
const bookList = document.querySelector(".list");
const newBook = document.querySelector(".add-button");

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  this.info = function (){
		return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
	};
}
function addBookToLibrary(book){
  myLibrary.push(book)
}

let hobbit = new Book('Hobbit', 'Tolkien', 650, 'not read yet');
addBookToLibrary(hobbit);
let tictac = new Book('Tic Tac', 'Disney', 10, 'read');
addBookToLibrary(tictac)
let umbertoEco = new Book('The name of Rose', 'Umberto Eco', 800, 'not read yet');
addBookToLibrary(umbertoEco);

function createBookList(){
  let i = 0;
  while (i < myLibrary.length){
    let bookItem = document.createElement("li");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookRead = document.createElement("p");
    bookItem.classList.add("list-item");
    bookTitle.innerText = (`Name: ${myLibrary[i].title}`);
    bookAuthor.innerText = (`Author: ${myLibrary[i].author}`);
    bookPages.innerText = (` ${myLibrary[i].pages} pages`);
    bookRead.innerText = myLibrary[i].read;
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookPages);
    bookList.appendChild(bookItem);
    console.log(myLibrary[i]);
    i++;
  }
}

createBookList();