const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/get-killer', (req, res) => {
  const killers = ["Alexia", "Brian", "Carmen", "Dylan", "Elif", "Faas"];
  const killer = killers[Math.floor(Math.random() * killers.length)];

  db.query('INSERT INTO sessions (killer) VALUES (?)', [killer], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ sessionId: result.insertId, killer });
  });
});

app.post('/log-clue', (req, res) => {
  const { sessionId, clue } = req.body;
  db.query('INSERT INTO clues (session_id, clue_number) VALUES (?, ?)', [sessionId, clue], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('Backend draait op http://localhost:3000');
});
