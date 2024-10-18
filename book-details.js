const API_URL = "https://gutendex.com/books/";
let loading = false;

// DOM Elements
const BookDetailsContainer = document.getElementById("book-details");
const loadingText = document.getElementById("loading-text");
const backNavigation = document.getElementById("back-navigation");

// Function to get query parameter (book ID)
function getBookIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Function to fetch book details api
async function fetchBookDetails(id) {
  loading = true;
  updateLoadingState();

  const response = await fetch(API_URL + id);
  const data = await response.json();
  console.log(data);

  loading = false;
  updateLoadingState();
  displayBookDetails(data);
}

// Update loading state
function updateLoadingState() {
  if (loading) {
    loadingText.style.display = "block";
    backNavigation.style.display = "none";
  } else {
    loadingText.style.display = "none";
    backNavigation.style.display = "block";
  }
}

async function displayBookDetails(book) {
  BookDetailsContainer.innerHTML = `
  <div class="book-details-container">
        <div class="book-details-left" order="1">
          <div class="book-img">
            <img
              src="${book.formats["image/jpeg"]}"
              alt="${book.title}"
            />
          </div>
          <div style="text-align:center;">
          <a style="text-align:center" target="_blank" href="${
            book.formats["text/html"]
          }">Read Book</a>
          </div>
        </div>
        <div class="book-details-right" order="2">
          <h1>${book.title}</h1>
          <p style="margin-top:5px;margin-bottom:15px;">
            by <span style="color: dodgerblue">
              ${book.authors[0]?.name.split(",").reverse().join(" ")}
            </span>
          </p>
          <p style="font-size:18px">Genre List:</p>
          <ul>
            ${book.subjects.map((subject) => `<li>${subject}</li>`).join("")}
          </ul>
        </div>
      </div>
  `;
}

// Back Navigation
backNavigation.addEventListener("click", function () {
  window.history.back();
});

const bookId = getBookIdFromURL();

// Initialize Function
fetchBookDetails(bookId);
