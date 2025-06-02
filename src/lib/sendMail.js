import nodemailer from "nodemailer";

const sendMail = async (options) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "support@tasheelom.com",
      pass: "Taheelom.com#(_^_)95213",
    },
    // tls: {
    //   rejectUnauthorized: process.env.NODE_ENV !== "development", 
    // },
    // // family: 4, // Force IPv4
  });

  let mailOptions = {
    from: '"Tas-Heel" <support@tasheelom.com>',  
    to: options.to,
    subject: options.subject,
    text: "This is a text message.", 
    html: options.html, 
    replyTo: options.replyTo || options.from 
  };

  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP Connection Error:", error);
    } else {
      console.log("SMTP Server is ready to send emails!");
    }
  });

  return transporter.sendMail(mailOptions);
};

export default sendMail;


