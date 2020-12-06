const express = require('express');
const pool = require('./config/postgres');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Get all users
app.get('/users', (req, res) => {
  console.log('Getting all users');

  pool
    .query('SELECT * FROM users')
    .then((qRes) => {
      // Sends the data back
      res.send(qRes.rows);
    })
    .catch((err) => console.error(err));
});

// Create a user
app.post('/users', (req, res) => {
  const { username } = req.body;

  if (!username) res.status(400).send('Username is missing');

  console.log(`Creating a user with username: ${username}`);

  // Add operations here
});

// Get a specific user
app.get('/users/:user_id', (req, res) => {
  const { user_id } = req.params;

  console.log(`Getting user id: ${user_id}`);

  // Add operations here
});

// Update a user
app.put('/users/:user_id', (req, res) => {
  const { user_id } = req.params;
  const { username } = req.body;

  if (!username) res.status(400).send('Username is missing');
  console.log(`Updating user id: ${user_id} with username: ${username}`);

  // Add operations here
});

// Delete a user
app.delete('/users/:user_id', (req, res) => {
  const { user_id } = req.params;
  console.log(`Deleting user id: ${user_id}`);

  // Add operations here
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
