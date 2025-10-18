// emailService.ts
"use server";

import nodemailer from "nodemailer";

interface AffiliateConfirmationData {
  email: string;
  firstName: string;
  lastName: string;
  affiliateId: string;
}

export async function sendAffiliateConfirmationEmail(
  data: AffiliateConfirmationData
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.GEMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Welcome to Our Affiliate Program!",
    html: generateAffiliateConfirmationEmail(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Confirmation email sent successfully!" };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return { success: false, message: "Failed to send confirmation email." };
  }
}

function generateAffiliateConfirmationEmail(
  data: AffiliateConfirmationData
): string {
  return `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Affiliate Registration Confirmation</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f7f7f7;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 30px;
    }
    .affiliate-id {
      background-color: #f0f7ff;
      border-left: 4px solid #2196F3;
      padding: 15px;
      margin: 20px 0;
      font-weight: bold;
      font-size: 16px;
      color: #0d47a1;
    }
    .next-steps {
      background-color: #f9f9f9;
      border-radius: 6px;
      padding: 20px;
      margin: 25px 0;
      border-left: 4px solid #4CAF50;
    }
    .next-steps-title {
      font-weight: 600;
      color: #2E7D32;
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 18px;
    }
    .next-steps-list {
      padding-left: 20px;
      margin: 0;
    }
    .next-steps-list li {
      margin-bottom: 8px;
      position: relative;
      list-style-type: none;
      padding-left: 25px;
    }
    .next-steps-list li:before {
      content: "→";
      color: #4CAF50;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eeeeee;
      font-size: 12px;
      color: #777777;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to Our Affiliate Program!</h1>
    </div>
    
    <div class="content">
      <p>Dear ${data.firstName} ${data.lastName},</p>
      
      <p>Thank you for joining our affiliate program! We're excited to have you on board.</p>
      
      <p>Your unique affiliate ID is:</p>
      <div class="affiliate-id">
        ${data.affiliateId}
      </div>
      
      <p>Please keep this ID safe as you'll need it to:</p>
      <ul>
        <li>Track your referrals</li>
        <li>Access your earnings</li>
        <li>Receive payments</li>
      </ul>
      
      <div class="next-steps">
        <h3 class="next-steps-title">Next steps:</h3>
        <ul class="next-steps-list">
          <li>You can start marketing now</li>
        </ul>
      </div>
      
      <p>If you have any questions, please reply to this email or contact our support team.</p>
      
      <p>Best regards,<br>The Affiliate Team</p>
      
      <div class="footer">
        <p>© ${new Date().getFullYear()} Intellixel. All rights reserved.</p>
        <p>If you didn't request this, please ignore this email.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
