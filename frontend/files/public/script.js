import { books } from './local-books.js';

// Script loaded
console.info("Script loaded")

// Toggle menu function here
function toggleMenu() {
	//
}

window.toggleMenu = toggleMenu;

// Filter books by genre
function filterBooksByGenre() {
	//
}

// Order books by title
function orderBooksByGenre() {
	//
}

// Order books by rating
function orderBooksByRating() {
	//
}

// Load books from imported JS file
// Backend endpoint is http://localhost:3001/books
document.addEventListener('DOMContentLoaded', () => {
	const bookGrid = document.getElementById('book-grid');
	books.forEach(book => {
		// Select the template and clone it
		const template = document.getElementById('bookComponent');
		const clone = document.importNode(template.content, true);
		
		// Populate template with data
		clone.querySelector('h3').innerText = book.title;
		clone.querySelector('img').src = `/public/images/${book.image_url}`;
		clone.querySelector('p').innerText = `Rating: ${book.rating}`;
		
		// Append the cloned template to the document
		bookGrid.appendChild(clone);
	});
  });