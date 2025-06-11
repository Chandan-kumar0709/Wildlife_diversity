const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const speciesPath = path.join(__dirname, 'data/species.json');
const feedbacksPath = path.join(__dirname, 'data/feedbacks.json');

app.get('/api/species', (req, res) => {
  const data = JSON.parse(fs.readFileSync(speciesPath));
  res.json(data);
});

app.post('/api/species', (req, res) => {
  const newSpecies = req.body;
  const data = JSON.parse(fs.readFileSync(speciesPath));
  data.push(newSpecies);
  fs.writeFileSync(speciesPath, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Species added!" });
});

app.get('/api/feedbacks', (req, res) => {
  const data = JSON.parse(fs.readFileSync(feedbacksPath));
  res.json(data);
});

app.post('/api/feedbacks', (req, res) => {
  const newFeedback = req.body;
  const data = JSON.parse(fs.readFileSync(feedbacksPath));
  data.push(newFeedback);
  fs.writeFileSync(feedbacksPath, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Feedback submitted!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});