const express = require('express');
const path = require('path');
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.dbpassword,
    database: "mail"
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

// route to add email 
app.post('api/create', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    db.query("INSERT INTO mail (name, email VALUES (?,?)", [name, email], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
})

app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: process.env.email,
        to: process.env.email,
        subject: 'Contact Form Submission',
        html:   `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
        };
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "Error "});
        } else {
            res.json({ status: "Message Sent "});
        }
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});