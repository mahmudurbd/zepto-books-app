const API_URL = "https://gutendex.com/books/";

// DOM Elements
const BookDetailsContainer = document.getElementById("book-details");

// Function to get query parameter (book ID)
function getBookIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Function to fetch book details api
async function fetchBookDetails(id) {
  const response = await fetch(API_URL + id);
  const data = await response.json();
  console.log(data);
  displayBookDetails(data);
}

async function displayBookDetails(book) {
  BookDetailsContainer.innerHTML = `
  <div class="book-details-container">
        <div class="book-details-left">
          <div class="book-img">
            <img
              src="${book.formats["image/jpeg"]}"
              alt="${book.title}"
            />
          </div>
        </div>
        <div class="book-details-right">
          <h1>${book.title}</h1>
          <p style="margin-top:5px;margin-bottom:15px;">
            by <span style="color: dodgerblue">
              ${book.authors[0].name.split(",").reverse().join(" ")}
            </span>
          </p>
          <p style="font-size:18px">Genre List:</p>
          <ul>
            ${book.subjects.map((subject) => `<li>${subject}</li>`).join("")}
          </ul>
        </div>
        <a style="text-align:center;margin-top:-20px" href="${
          book.formats["text/html"]
        }">Read Book</a>
      </div>
  `;
}

const bookId = getBookIdFromURL();

// Initialize App
fetchBookDetails(bookId);
