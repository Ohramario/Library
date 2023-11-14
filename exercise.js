let myLibrary = ['car', 'book'];
const string = JSON.stringify(myLibrary);
const name = document.querySelector("#input")
const addTitle = document.querySelector(".addTitle")
const addAuthor = document.querySelector(".addAuthor")
const addPages = document.querySelector(".addPages")
const addRead = document.querySelector(".addRead")
const display = document.querySelector(".display")
const displayBtn= document.querySelector(".displayButton")
const clear= document.querySelector(".clear")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + ", " + read;
    }
}
function addBookToLibrary() {
    
}

addButton.addEventListener('click', (event) => {
    

})

displayBtn.addEventListener('click', (event) => {
   display.innerText = string;
})

clear.addEventListener('click', (event) => {
    display.innerText = "";
})


