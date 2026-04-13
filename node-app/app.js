const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3000;

// Route
app.get('/', (req, res) => {
  res.json({ message: "hello sir two-tier app AUTOMATED successfully with different networks using JENKINS..." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
