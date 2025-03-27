const express = require('express');
const cors = require('cors');
const app = express();

// Allow frontend to talk to backend
app.use(cors());
app.use(express.json());

// Fake database for testing
let tasks = [];
let events = [];

// Routes
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  tasks.push(req.body);
  res.json({ success: true });
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.post('/api/events', (req, res) => {
  events.push(req.body);
  res.json({ success: true });
});

// Serve frontend files
app.use(express.static('../public'));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});