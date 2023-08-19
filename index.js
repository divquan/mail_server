const express = require("express");
const { useTransporter, HTML_TEMPLATE, SENDMAIL } = require("./helper");

const app = express();
const port = 3000;

app.use(express.json()); // Add this line to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("OK!").status(200);
});

app.post("/send-mail", (req, res) => {
  const {
    senderName,
    senderAddress,
    password,
    recipientAddress,
    heading,
    message,
  } = req.body;
  console.log(
    "email: ",
    senderAddress,
    "password: ",
    password,
    "message: ",
    message
  );
  const transporter = useTransporter(senderAddress, password);

  const options = {
    from: `"${senderName}" <${senderAddress}>`,
    to: recipientAddress,
    subject: heading,
    text: message,
    html: HTML_TEMPLATE(message),
  };

  SENDMAIL(transporter, options, (info) => {
    console.log("Email sent successfully");
    console.log("MESSAGE ID: ", info.messageId);
  });
  res.send("email sent");
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
