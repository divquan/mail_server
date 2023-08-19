// an email template that can be used with Nodemailer to send emails

const nodemailer = require("nodemailer");

const useTransporter = (email, password) => {
  return (transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  }));
};

const HTML_TEMPLATE = (text) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>NodeMailer Email Template</title>
        <style>
          .container {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .email {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
          }
          .email-header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
              <h1>EMAIL HEADER</h1>
            </div>
            <div class="email-body">
              <p>${text}</p>
            </div>
            <div class="email-footer">
              <p>EMAIL FOOTER</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

/** create reusable sendmail function 
@params {object} options - mail options (to, subject, text, html)
@params {function} callback - callback function to handle response
*/
const SENDMAIL = async (transporter, mailDetails, callback) => {
  try {
    const info = await transporter.sendMail(mailDetails);
    callback(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  useTransporter: useTransporter,
  HTML_TEMPLATE: HTML_TEMPLATE,
  SENDMAIL: SENDMAIL,
};
