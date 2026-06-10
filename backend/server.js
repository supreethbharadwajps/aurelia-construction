// backend/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-password',
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, service } = req.body;

    // Send email notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@bluelite.in',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Auto-reply to sender
    const autoReply = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting AURELIA',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24-48 hours.</p>
        <p>Your inquiry regarding "${service}" has been forwarded to our team.</p>
        <p>Best regards,<br>AURELIA Team</p>
      `,
    };

    await transporter.sendMail(autoReply);

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Registration form endpoint
app.post('/api/register/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const formData = req.body;

    // Send email notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'careers@bluelite.in',
      subject: `New ${type} Registration`,
      html: `
        <h2>New ${type.charAt(0).toUpperCase() + type.slice(1)} Registration</h2>
        ${Object.entries(formData).map(([key, value]) => 
          `<p><strong>${key}:</strong> ${value}</p>`
        ).join('')}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit registration' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});