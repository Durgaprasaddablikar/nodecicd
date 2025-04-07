const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

module.exports = app;
