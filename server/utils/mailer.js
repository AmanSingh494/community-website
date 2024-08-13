// mailer.js
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const sendVerificationEmail = (to, token) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: 'Email Verification',
    html: `<p>Please verify your email by clicking on the following link: <a href="${process.env.CLIENT_URL}/verify-email?token=${token}">Verify Email</a></p>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error)
    } else {
      console.log('Email sent:', info.response)
    }
  })
}

module.exports = { sendVerificationEmail }
