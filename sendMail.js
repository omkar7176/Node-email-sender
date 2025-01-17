const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: "Fintech Company",
    address: process.env.USER,
  }, // sender address
  to: ["omkartupere7176@gmail.com"], // list of receivers
  subject: "Send Email using nodemailer and gmail auth", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
  attachments: [
    {
      filename: "test.pdf",
      path: path.join(__dirname, "test.pdf"),
      contentType: "application/pdf",
    },
    {
      filename: "meetup.png",
      path: path.join(__dirname, "meetup.png"),
      contentType: "image/jpg/png",
    },
  ],
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent!");
  } catch (error) {
    console.error(error);
  }
};

// Corrected line: Pass mailOptions directly
sendMail(transporter, mailOptions);
