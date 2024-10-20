# Books Explorer APP

**A simple and user-friendly web application that fetches books from the [Gutendex API](https://gutendex.com/). The app provides book listing, search, genre filter, wishlist, and pagination features. Built with vanilla JavaScript, HTML, and CSS, the project is fully responsive and includes smooth animations for a seamless user experience.**

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Reference](#api-reference)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Wishlist Feature](#wishlist-feature)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Book Listing**: Displays book titles, authors, cover images, genres, and book IDs.
- **Search Functionality**: Real-time search bar to filter books by title.
- **Genre Filter**: Dropdown to filter books by genre or topic.
- **Wishlist**: Clickable 'heart' icon to add or remove books from the wishlist, stored in local storage.
- **Pagination**: Easy navigation through books with pagination options (Next, Previous).
- **Responsive Design**: Works smoothly across both desktop and mobile devices.
- **Smooth Animations**: Books appear/disappear with smooth transitions for a better user experience.

## Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahmudurbd/zepto-books-app.git
2. **Navigate to the project directory:**
   ```bash
   cd zepto-books-app
3. Open `index.htm`l in your browser: Simply open the `index.html` file in your browser to view the project locally.

### Usage
Once the app is running:

- The homepage displays a list of books.
- Use the search bar to filter books by title.
- Use the genre dropdown to filter books by genre.
- Click the heart icon to add/remove books from the wishlist.
- Navigate between book pages using the pagination links.

### API Reference
This project uses the Gutendex API to fetch book data.

Sample API Request:

```bash
GET https://gutendex.com/books.
```
### Tech Stack
- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla)
- Gutendex API

### Screenshots

##### Homepage:
![Homepage](https://i.imghippo.com/files/HpGz91729397773.png)

##### Wishlist page:
![Wishlist page](https://i.imghippo.com/files/fy7Ai1729398866.png)

##### Book details page:
![Bookdetails page](https://i.imghippo.com/files/L33sV1729399449.png)

### Wishlist Feature
Books can be added to a wishlist by clicking on the heart icon. The state is saved in the browser’s `localStorage` and will persist across page reloads. To remove a book from the wishlist, click the heart icon again.

## Project Structure

```plaintext
ZEPTO-BOOKS-APP/
│
├── assets/
│   └── loading.gif              # Loading spinner
│
├── css/
│   ├── book-details.css          # Styles for the book details page
│   ├── style.css                 # General styles for the app
│   └── wishlist.css              # Styles for the wishlist page
│
├── js/
│   ├── book-details.js           # Logic for the book details page
│   ├── main.js                   # Main logic for fetching and displaying books
│   └── wishlist.js               # Logic for the wishlist page
│
├── book-details.html             # Book details page
├── index.html                    # Homepage
├── wishlist.html                 # Wishlist page
├── README.md                     # Project documentation
```
## Future Enhancements
- Add more advanced filters (e.g., by author, publication date).
- Improve the user interface with a dark mode toggle.
- Include user ratings and reviews for each book.
- Implement an API fallback if the primary API fails.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any features or bug fixes.

1. Fork the project.
2. Create your feature branch `(git checkout -b feature/AmazingFeature)`.
3. Commit your changes `(git commit -m 'Add some AmazingFeature')`.
4. Push to the branch `(git push origin feature/AmazingFeature)`.
5. Open a pull request.
