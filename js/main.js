const API_URL = "https://gutendex.com/books";
let books = [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let loading = false;
let nextPageUrl = null;
let prevPageUrl = null;

// DOM Elements
const booksList = document.getElementById("books-list");
const paginationContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const loadingText = document.getElementById("loading-text");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");

// Fetch Books from API
async function fetchBooks(url = API_URL) {
  loading = true;
  updateLoadingState();

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  books = data.results;
  nextPageUrl = data.next;
  prevPageUrl = data.previous;

  loading = false;
  displayBooks();
  updateLoadingState();
  updatePaginationButton();
}

function updateLoadingState() {
  if (loading) {
    loadingText.style.display = "block";
    booksList.style.display = "none";
  } else {
    loadingText.style.display = "none";
    booksList.style.display = "grid";
  }
}

// Check if a book is in the wishlist by its id
function isBookInWishlist(bookId) {
  return wishlist.some((item) => item.id === bookId);
}

// Display Books
function displayBooks() {
  booksList.innerHTML = books
    .map(
      (book) => `
    <div class="book-card" data-aos="fade-up" data-aos-duration="3000">
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
        <span onclick="toogleWishList(${book.id})" class="icon">
        ${isBookInWishlist(book.id) ? "❤️" : "🤍"}
      </span>
        <a style="cursor:pointer" href="./book-details.html?id=${
          book.id
        }">Book details</a>
      </div>
    `
    )
    .join("");

  if (books.length > 0) {
    paginationContainer.style.display = "block";
  } else {
    paginationContainer.style.display = "none";
  }
  AOS.init();
}

// Wishlist Toogle Function
function toogleWishList(bookId) {
  const book = books.find((book) => book.id === bookId);

  if (isBookInWishlist(book.id)) {
    wishlist = wishlist.filter((item) => item.id !== bookId);
  } else {
    wishlist.push(book);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayBooks();
}

// Update Pagination Button
function updatePaginationButton() {
  if (nextPageUrl) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }

  if (prevPageUrl) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }
}

// Search Functionality
searchInput.addEventListener("input", function (e) {
  const query = e.target.value.trim();
  const searchUrl = query ? `${API_URL}?search=${query}` : API_URL;
  fetchBooks(searchUrl);
});

// Filter Functionality
genreFilter.addEventListener("change", function (e) {
  const selectedGenre = e.target.value;
  const genreUrl = selectedGenre
    ? `${API_URL}?topic=${selectedGenre}`
    : API_URL;
  fetchBooks(genreUrl);
});

// Event listener
nextButton.addEventListener("click", function () {
  if (nextPageUrl) {
    fetchBooks(nextPageUrl);
  }
});

prevButton.addEventListener("click", function () {
  if (prevPageUrl) {
    fetchBooks(prevPageUrl);
  }
});

// Initialize App
fetchBooks();
