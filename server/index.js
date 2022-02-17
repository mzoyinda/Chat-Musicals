const express = require('express');
const { Client } = require('pg')
const cors = require('cors');
const port = 3002

const db = new Client({
    host: "localhost",
    user: "postgres",
    port: 4000,
    password: "ADMIN",
    database: 'moviedb'
})

db.connect();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/', (req, res) => {
    db.query(`Select * from videos`)
        .then((data) => {
            console.log(data.rows);
            res.json(data.rows);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })