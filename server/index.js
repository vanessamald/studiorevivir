const express = require('express');
const path = require('path');
const mysql = require("mysql2");
const cors = require("cors");
const emailContent = require('../client/src/components/Newsletter') ;

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

const { htmlToText } = require('html-to-text');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    //port: process.env.DB_PORT
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/newsletter', (req, res) => {
    const query = "SELECT * FROM mail";
    db.query(query, (error, results) => {
        if (error){
            res.status(500).send(error);
        } else {
            const newsletter = results[0];
            res.send(newsletter.content);
        }   
    })
})

// route to send out newsletter
app.post('/newsletter/send', (req, res) => {
    const query = "SELECT email FROM list";
    db.query(query, (error, results) => {

        if (error) {
            res.status(500).send(error);
        } else {
            const emails = results.map(result => result.email);
            //const content = <EmailContent/>
           
                const mail = {
                    from: process.env.newsletter_email,
                    to: emails.join(', '),
                    subject: 'Newsletter',
                    html: emailContent({ body: emailContent.body}) 
                    
                }
                
                transporter.sendMail(mail, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).send(error);
                } else {
                    console.log('Newsletter sent successfully!');
                    res.send('Newsletter sent to all users');
                }
            })
        }
    });
})

// route to add email 
app.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    db.query("INSERT INTO list (name, email) VALUES (?,?)", [name, email], (err, result) => {
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