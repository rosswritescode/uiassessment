const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Dummy data for the books
const books = [
	{
	  "title": "Computing Manual 1987",
	  "image_url": "computing-manual-1987.webp",
    "genre": "Science",
	  "rating": 5
	},
	{
	  "title": "Music Madness",
	  "image_url": "music-madness.webp",
    "genre": "Arts",
	  "rating": 7
	},
	{
	  "title": "History Roundup",
	  "image_url": "history-roundup.webp",
    "genre": "Adventure",
	  "rating": 8
	},
	{
	  "title": "Mountain Pass",
	  "image_url": "mountain-pass.webp",
    "genre": "Adventure",
	  "rating": 6
	},
	{
	  "title": "Mystery Mountain",
	  "image_url": "mystery-mountain.webp",
    "genre": "Adventure",
	  "rating": 4
	},
	{
	  "title": "Space Race",
	  "image_url": "space-race.webp",
    "genre": "Science",
	  "rating": 9
	}
]

function randomizeArrayOrder(array) {
  const clone = JSON.parse(JSON.stringify(array));
  clone.sort(() => Math.random() - 0.5);
  return clone;
}

app.use(cors({ origin: '*' }));

// GET endpoint for all books
app.get('/books', (req, res) => {
  res.json(randomizeArrayOrder(books));
});

// GET endpoint for searching books
app.get('/search', (req, res) => {
  const { searchterm } = req.query;
  if (!searchterm) {
    return res.status(400).send('Search term is required');
  }

  // Filter books based on the search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchterm.toLowerCase())
  );

  res.json(filteredBooks);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});