// In your server.js or routes file
const express = require('express');
const mysql = require('mysql2'); // or another MySQL library
const app = express();

// Initialize the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

app.use(express.json());

// Handle user signup
app.post('/sign-up', (req, res) => {
  const { username, email, password } = req.body;

  // Use SQL queries to insert user data into the MySQL database
  const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(insertQuery, [username, email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error signing up' });
    } else {
      res.json({ message: 'Signup successful' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
