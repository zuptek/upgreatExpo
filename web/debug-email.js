require('dotenv').config({ path: '.env' });
const nodemailer = require('nodemailer');

async function main() {
    console.log("Testing SMTP Connection...");
    console.log("User:", process.env.EMAIL_USER);
    // Do not log the full password, just check if it exists
    console.log("Password exists:", !!process.env.EMAIL_PASSWORD);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error("Missing credentials in .env");
        return;
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        console.log("Attempting to send mail...");
        const info = await transporter.sendMail({
            from: `"Test" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to self
            subject: "SMTP Test",
            text: "If you see this, SMTP is working.",
        });
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:");
        console.error(error);
    }
}

main();
