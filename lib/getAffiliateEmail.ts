// emailService.ts
"use server";

import nodemailer from "nodemailer";

interface AffiliateConfirmationData {
  email: string;
  firstName: string;
  lastName: string;
  affiliateId: string;
  social?: string;
  phone?: string;
  paymentMethod?: string;
}

export async function sendAffiliateRegistrationEmailToAdmin(
  data: AffiliateConfirmationData
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.GEMAIL_APP_PASSWORD,
    },
  });

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || process.env.TO_EMAIL,
    subject: "New Affiliate Registration",
    html: generateAdminNotificationEmail(data),
  };

  try {
    await transporter.sendMail(adminMailOptions);
    return { success: true, message: "Admin notification sent successfully!" };
  } catch (error) {
    console.error("Error sending admin notification email:", error);
    return { success: false, message: "Failed to send admin notification." };
  }
}

function generateAdminNotificationEmail(
  data: AffiliateConfirmationData
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Affiliate Registration</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #4CAF50;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 0 0 5px 5px;
          border: 1px solid #ddd;
          border-top: none;
        }
        .affiliate-info {
          margin: 15px 0;
        }
        .info-item {
          margin-bottom: 8px;
        }
        .label {
          font-weight: bold;
          display: inline-block;
          width: 120px;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Affiliate Registration</h1>
      </div>
      <div class="content">
        <p>A new user has registered for the affiliate program:</p>
        
        <div class="affiliate-info">
          <div class="info-item">
            <span class="label">Name:</span>
            <span>${data.firstName} ${data.lastName}</span>
          </div>
          <div class="info-item">
            <span class="label">Email:</span>
            <span>${data.email}</span>
          </div>
          <div class="info-item">
            <span class="label">Affiliate ID:</span>
            <span>${data.affiliateId}</span>
          </div>
          ${data.phone ? `
          <div class="info-item">
            <span class="label">Phone:</span>
            <span>${data.phone}</span>
          </div>
          ` : ''}
          ${data.social ? `
          <div class="info-item">
            <span class="label">Social Media:</span>
            <span>${data.social}</span>
          </div>
          ` : ''}
          ${data.paymentMethod ? `
          <div class="info-item">
            <span class="label">Payment Method:</span>
            <span>${data.paymentMethod}</span>
          </div>
          ` : ''}
        </div>
        
        <p>This affiliate can now be managed through the admin dashboard.</p>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Intellixel. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

