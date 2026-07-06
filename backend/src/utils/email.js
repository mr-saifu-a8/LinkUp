const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async ({ email, otp }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "LinkUp Password Reset OTP",
    html: `<p>Your password reset OTP is <strong>${otp}</strong>.</p><p>It will expire in 10 minutes.</p>`,
  });
};

module.exports = {
  sendOtpEmail,
};
