import nodemailer from 'nodemailer';

export async function sendContact(data) {
  // Extract data from the form
  const to = process.env.TO_EMAIL;
  const subject = "I want to contact";
  const text = ` Boss you have a new email from Intellixel.
        From : ${data.name}
        email : ${data.email}
        Text : ${data.message}`;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.GEMAIL_APP_PASSWORD, // Your email password or app-specific password
    },
  });

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to, // Recipient address
    subject, // Email subject
    text, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return { message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "Failed to send email." };
  }
}
