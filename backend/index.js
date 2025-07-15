const express = require('express');
const cors = require('cors');  // Importing the cors library

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Produuuct 1111' },
    { id: 2, name: 'Product 2222' },
    { id: 3, name: 'Produuct 3333' },
  ];
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
