const express = require('express');
const cors = require('cors');  // Importing the cors library

const app = express();

// Use CORS middleware to allow requests from different origins (e.g., React frontend on port 3001)
app.use(cors());

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
