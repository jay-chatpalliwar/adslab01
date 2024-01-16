const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: '21510018',
  password: 'jay2003',
  database: 'dbs',
});

db.connect();

app.use(cors());
app.use(express.json());

// CRUD operations go here...
// ...

app.post('/create', (req, res) => {
    const { name, email,password,mobileno } = req.body;
    const insertQuery = `INSERT INTO login (name, email,password,mobileno) VALUES (?, ?,?,?)`;
  
    db.query(insertQuery, [name, email,password,mobileno], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating user');
      } else {
        res.status(201).send('User created successfully');
      }
    });
  });
  
  // ...
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
