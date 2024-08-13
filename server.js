const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.post('/api/auth/signup', (req, res) => {
  // Your signup logic here
  res.send('Signup endpoint');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
