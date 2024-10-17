let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

// DOM Elements
const wishlistContainer = document.getElementById("wishlist-container");

// Display Wishlist Books
function displayWishlistBooks() {
  if (wishlistData.length === 0) {
    wishlistContainer.style.gridTemplateColumns = "1fr";
    wishlistContainer.innerHTML = `<p style="text-align:center">Your wishlist is empty</p>`;
    return;
  }

  wishlistContainer.innerHTML = wishlistData
    .map(
      (item) =>
        `
    <div class="wishlist-card">
        <div class="card-img">
          <img
            src="${item.formats["image/jpeg"]}"
            alt=${item.title}
          />
        </div>
        <h3 class="title">${item.title}</h3>
        <p class="author">Author: ${item.authors[0]?.name
          .split(", ")
          .reverse()
          .join(" ")}</p>
        <span class="genre" style="font-size:14px">Genre: ${
          item.subjects
        }</span>
        <br />
        <span data-id="${item.id}" class="icon">
          ❤️
        </span>
        <a style="cursor:pointer" href="./book-details.html?id=${
          item.id
        }">Book details</a>
      </div>
  `
    )
    .join("");

  // Event Listener for removing item from wishlist
  document.querySelectorAll(".icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      const bookId = this.getAttribute("data-id");
      removeFromWishList(parseInt(bookId));
    });
  });
}

// Wishlist Toggle Function
function removeFromWishList(bookId) {
  console.log(bookId);
  wishlistData = wishlistData.filter((item) => item.id !== bookId);
  localStorage.setItem("wishlist", JSON.stringify(wishlistData));
  displayWishlistBooks();
}

// Initialize Function
displayWishlistBooks();
