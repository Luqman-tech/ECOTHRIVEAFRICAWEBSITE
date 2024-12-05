const express = require('express');
const path = require('path');
const app = express();

// Serve Vite's static files
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

// Serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

