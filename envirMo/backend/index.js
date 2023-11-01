import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dacn',
})

app.get("/", (req, res) => {
    res.json("Thao ne")
})

app.get("/specifi",  (req, res) => {
    const q = "SELECT * FROM specifi"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})