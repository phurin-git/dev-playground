const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Calculator server running on port ${port}`);
});

app.use(express.json());

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) + parseFloat(b);
  res.status(200).json({ result: result });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) - parseFloat(b);
  res.status(200).json({ result: result });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) * parseFloat(b);
  res.status(200).json({ result: result });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (parseFloat(b) === 0) {
    res.status(400).json({ error: 'Division by zero is not allowed' });
  } else {
    const result = parseFloat(a) / parseFloat(b);
    res.status(200).json({ result: result });
  }
});