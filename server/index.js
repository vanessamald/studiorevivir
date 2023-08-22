const express = require('express');
const path = require('path');
const mysql = require("mysql2");
const mailchimp = require('@mailchimp/mailchimp_marketing');
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

// mailchimp connection
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, 
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));

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
                    subject: 'Email Campaign',
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

// route to register email for newsletter and send a Welcome Email
app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Update email list in Mailchimp
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    const subscriber = {
                        email_address: email,
                        status: 'subscribed',
                        merge_fields: {
                        FNAME: name,
                        },
                    };

    mailchimp.lists.addListMember(audienceId, subscriber).then(() => {
        console.log('Subscriber added to Mailchimp list');
        // Send welcome email to new user
        const mail = {
                        from: process.env.newsletter_email,
                        to: email,
                        subject: 'Revivir Newsletter',
                        html: `
                        <html>
                            <head>
                                <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #242222;
                                    padding: 25px;
                                    }
                                h1 {
                                    color: #edece7;
                                    font-size: 2rem;
                                    }
                                p {
                                    color: #edece7;
                                }
                                </style>
                            </head>
                                <body>
                                    <h1>Welcome to our Newsletter!</h1>
                                    <p>Thanks for signing up! Content coming soon!</p>
                                    <br/>
                                    <br/>
                                    <p>Love,</p>
                                    <p>Revivir Studio</p>
                                </body>
                        </html>
                        `,
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
    })
    .catch((error) => {
        console.error('Error adding subscriber to Mailchimp:', error);
        res.status(500).send('Error adding subscriber to Mailchimp');
    })
})


// delete route for users to unsubscribe from newsletter
app.delete('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // update Mailchimp audience
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    const memberEmail = { email_adress: email};
    const memberStatus = 'unsubscribed';

    mailchimp.lists.updateListMember(listId, memberEmail, {status: memberStatus}).then(() => {
        console.log('Member unsubscribed in Mailchimp successfully');
        res.status(200).send('Member unsubscribed!');
    })
    .catch((error) => {
        console.log('Error updating member in Mailchimp', error);
        res.status(500).send('Error updating member in Mailchimp');
    })
})

// post route to send contact form email
app.post('/contact', (req, res) => {
    // get email information from form submission
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const option = req.body.option;
    const mail = {
        from: process.env.email,
        to: process.env.email,
        subject: 'Contact Form Submission',
        html:   `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                <p>Option:${option}</p>`,
                
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