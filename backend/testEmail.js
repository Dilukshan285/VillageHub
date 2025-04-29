// testEmail.js
require('dotenv').config(); // Load environment variables
const nodemailer = require('nodemailer');

// Create transporter using your email service
const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your service provider if different
    auth: {
        user: process.env.SMTP_MAIL, // Your email from .env
        pass: process.env.SMTP_PASSWORD, // Your password or app-specific password from .env
    },
    secure: true, // Use TLS for secure connection
});

const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: 'recipient-email@example.com', // Replace with a real email address you can access
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email to verify that Nodemailer is working.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
