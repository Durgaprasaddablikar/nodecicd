const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from our EC2 CI/CD deployment!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
