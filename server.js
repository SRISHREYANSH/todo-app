const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
// Blackbox AI Todo Backend
require('dotenv').config();

let mockTasks = {
  'grocery': ['Buy apples', 'Get milk', 'Bread'],
  'party': ['Buy balloons', 'Invite friends', 'Cake'],
  'work': ['Email boss', 'Finish report', 'Meeting'],
  'default': ['Task 1', 'Task 2', 'Task 3']
};

const app = express();

app.use(express.json());
app.use(cors());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const newTask = { id: uuidv4(), title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Task not found' });
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
});

app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Task not found' });
    tasks.splice(index, 1);
    res.status(204).send();
});

app.post('/tasks/ai-generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  const key = prompt.toLowerCase().trim();
  const aiTasks = mockTasks[key] || mockTasks['default'];
  const newTasks = aiTasks.map(title => ({ id: uuidv4(), title, completed: false, ai: true }));
  tasks.push(...newTasks);
  res.json(newTasks);
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

