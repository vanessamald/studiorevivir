const express = require('express');
const path = require('path');
const mysql = require("mysql2");
const cors = require("cors");
const mailchimp = require('@mailchimp/mailchimp_marketing');
//const emailContent = require('../client/src/components/Newsletter') ;

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

//const { htmlToText } = require('html-to-text');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

// mailchimp connection
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, 
});

async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }
  
  run();

/*
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    //port: process.env.DB_PORT
});
*/

// connection to db
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database!');
    
      connection.query('SELECT * FROM email_list', (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
        } else {
          console.log('Query results:', results);
        }
      });
    }
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/newsletter', (req, res) => {
    const query = "SELECT * FROM email_list";
    connection.query(query, (error, results) => {
        if (error){
            res.status(500).send(error);
        } else {
            const newsletter = results[0];
            res.send(newsletter.content);
        }   
    })  
})

// route to send out newsletter
app.post('/newsletter', (req, res) => {
    // get campaign info from mailchimp api
    const campaignId = process.env.MAILCHIMP_CAMPAIGN_ID;

    mailchimp.campaigns.getContent(campaignId).then((response)=> {
        const campaignContent = response.html || '';

        // query email list from db
        const getEmailListQuery = 'SELECT email FROM email_list';

        connection.query(getEmailListQuery, (err, results) => {
        if(err) {
            console.log('Error retrieving email list', err);
        } else {
            // loop through email list
            const emailList = results.map((row) => row.email);
            emailList.forEach((email) => {
                // nodemailer email options
                const mailOptions = {
                    from: process.env.newsletter_email,
                    to: email,
                    subject: '',
                    html: campaignContent
                }
                // send email campaign
                transporter.sendMail(mailOptions, (error, info)=> {
                    if (error) {
                        console.error('Error sending email', error);
                    } else {
                        console.log('Email sent!');
                    }
                })
            })
            res.send('Email sent to email list');
        }
    })

})

})

// route to add email and send a Welcome Email
app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // create table schema
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS email_list (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )
  `;
  
    // queries to insert email into db
    const insertQuery = 'INSERT INTO email_list (name, email) VALUES (?, ?)';
    const selectQuery = 'SELECT email FROM email_list WHERE email = ?';
    
    // Create the table (if it doesn't exist) before inserting data
    connection.query(createTableQuery, (createErr) => {
        if (createErr) {
            console.error('Error creating table:', createErr);
            res.status(500).send('Error creating table');
        } else {
            // check if user exists in the db
            connection.query(selectQuery, [email], (selectErr, results) => {
                if (selectErr) {
                    console.error('Error selecting data from the database:', selectErr);
                    res.status(500).send('Error selecting data from the database');
                } else {
                    if (results.length > 0) {
                        res.status(400).send('Email already registered');
                    } else {
                        // Insert data into the table if the user does not exist
                        connection.query(insertQuery, [name, email], (insertErr, result) => {
                            if (insertErr) {
                                console.error('Error inserting data into the database:', insertErr);
                                res.status(500).send('Error inserting data into the database');
                            } else {
                                console.log('Data inserted successfully:', result);

                                // welcome email
                                const mail = {
                                    from: process.env.newsletter_email,
                                    to: email,
                                    subject: 'Newsletter',
                                    html: '<p>Thanks for signing up! <br/> content coming soon!</p>'
                                };

                                // send welcome email to new user
                                transporter.sendMail(mail, (mailErr, info) => {
                                        if (mailErr) {
                                        console.error('Error sending email:', mailErr);
                                        res.status(500).send('Error sending email');
                                    } else {
                                        console.log('Newsletter sent successfully!');
                                        res.send('Newsletter sent to the client');
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
    });
});


app.post('/contact', (req, res) => {
    // get email information from form submission
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
    // send email via nodemailer
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