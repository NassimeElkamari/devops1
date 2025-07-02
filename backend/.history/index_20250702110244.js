const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Docker!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Export the app for testing or further configuration