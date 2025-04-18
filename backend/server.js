require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-production-domain.com'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Email transporter with better configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // For local testing only (remove in production)
  }
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error);
  } else {
    console.log('✅ SMTP Connection Ready');
  }
});

// Enhanced contact endpoint
app.post('/api/contact', async (req, res) => {
  console.log('\n📨 New Form Submission Received:', req.body);
  
  try {
    const { name, email, interest } = req.body;

    // Validation
    if (!name || !email) {
      console.log('⚠️ Validation Failed - Missing Fields');
      return res.status(400).json({ 
        error: 'Name and email are required',
        receivedData: req.body 
      });
    }

    console.log('✉️ Attempting to send email...');
    const mailOptions = {
      from: `"MemoTag Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest || 'Not specified'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Interest:</strong> ${interest || 'Not specified'}</p>
      `,
      // Debugging options:
      debug: true,
      logger: true
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📬 Email Sent Successfully:', info.messageId);
    res.status(200).json({ 
      message: 'Message sent successfully!',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('🔥 Email Send Error:', error);
    res.status(500).json({ 
      error: 'Error sending message',
      detailedError: process.env.NODE_ENV === 'development' ? error.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    smtpConfigured: !!process.env.EMAIL_USER
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📧 SMTP User: ${process.env.EMAIL_USER || 'Not configured'}`);
});