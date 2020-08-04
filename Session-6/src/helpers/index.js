const isEmpty = obj => Object.keys(obj).length <= 0;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendEmail(to, subject, text) {
    const msg = {
        to,
        from: 'fakhar.akhtar@venturedive.com',
        subject,
        html: text
    };
    sgMail.send(msg);
}

module.exports = {
    isEmpty,
    sendEmail
};