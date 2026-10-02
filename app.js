import express from 'express';
import pool from './db.js';

const app = express();

app.get('/products', (req, res) => {
    res.json("hello products")
})

app.get('/', (req, res) => {
    res.json("hello server is port no 5000")
})

app.get('/contact', (req, res) => {
    res.json("this contact page")
})


app.get('/about', (req, res) => {
    res.json("this about page")
})
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

pool.query("SELECT NOW()", (error, result) => {
    if(error){
        console.log("Database failed to connect", error)
    }
     else {
        console.log("Database connected successfully", result.rows)
    }
}) 