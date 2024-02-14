const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
    {
        "id": 1,
        "title": "Set up environment",
        "description": "Install Node.js, npm, and git",
        "completed": true
      },
      {
        "id": 2,
        "title": "Create a new project",
        "description": "Create a new project using the Express application generator",
        "completed": true
      },
      {
        "id": 3,
        "title": "Install nodemon",
        "description": "Install nodemon as a development dependency",
        "completed": true
      },
      {
        "id": 4,
        "title": "Install Express",
        "description": "Install Express",
        "completed": false
      },
      {
        "id": 5,
        "title": "Install Mongoose",
        "description": "Install Mongoose",
        "completed": false
      },
      {
        "id": 6,
        "title": "Install Morgan",
        "description": "Install Morgan",
        "completed": false
      },
      {
        "id": 7,
        "title": "Install body-parser",
        "description": "Install body-parser",
        "completed": false
      },
      {
        "id": 8,
        "title": "Install cors",
        "description": "Install cors",
        "completed": false
      },
      {
        "id": 9,
        "title": "Install passport",
        "description": "Install passport",
        "completed": false
      },
      {
        "id": 10,
        "title": "Install passport-local",
        "description": "Install passport-local",
        "completed": false
      },
      {
        "id": 11,
        "title": "Install passport-local-mongoose",
        "description": "Install passport-local-mongoose",
        "completed": false
      },
      {
        "id": 12,
        "title": "Install express-session",
        "description": "Install express-session",
        "completed": false
      },
      {
        "id": 13,
        "title": "Install connect-mongo",
        "description": "Install connect-mongo",
        "completed": false
      },
      {
        "id": 14,
        "title": "Install dotenv",
        "description": "Install dotenv",
        "completed": false
      },
      {
        "id": 15,
        "title": "Install jsonwebtoken",
        "description": "Install jsonwebtoken",
        "completed": false
      },
];

app.get('/check', (req, res) => {
  console.log('API Working');
});
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found.');
    res.json(task);
});


app.use((req, res) => {
  res.status(404).send('Invalid endpoint.');
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found.');
    if (!req.body.title || !req.body.description || typeof req.body.completed !== 'boolean') {
        return res.status(400).send('Invalid task data.');
    }
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Task not found.');
    const task = tasks.splice(taskIndex, 1);
    res.json(task);
});

app.use((req, res) => {
    res.status(404).send('Invalid endpoint.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
