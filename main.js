const API_URL = "https://gutendex.com/books";
let books = [];

// DOM Elements
const booksList = document.getElementById("books-list");

// Fetch Books from API
async function fetchBooks() {
  const response = await fetch(API_URL);
  const data = await response.json();
  books = data.results;
  displayBooks();
}

// Display Books
function displayBooks() {
  booksList.innerHTML = books
    .map(
      (book) => `
    <div class="book-card">
        <div class="card-img">
          <img
            src="${book.formats["image/jpeg"]}"
            alt=${book.title}
          />
        </div>
        <h3 class="title">${book.title}</h3>
        <p class="author">Author: ${book.authors[0]?.name
          .split(", ")
          .reverse()
          .join(" ")}</p>
        <span class="genre" style="font-size:14px">Genre: ${
          book.subjects
        }</span>
        <br />
        <span class="icon">♡</span>
        <a style="cursor:pointer" href="./book-details.html?id=${
          book.id
        }">Book details</a>
      </div>
    `
    )
    .join("");
}
// Initialize App
fetchBooks();
