"use server";

import nodemailer from "nodemailer";
import { submitContactFormToGoogleSheets } from "./submitToGoogleSheets";

interface EmailState {
    success: boolean;
    message: string;
}

export async function sendEmail(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !phone || !message) {
        return { success: false, message: "Please fill in all fields." };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to admin (you)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_ADMIN,
            subject: `🎯 New Contact Form Message from ${firstName} ${lastName}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #E6007E; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
        .detail-row:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #191970; width: 100px; display: inline-block; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <div style="background-color: #ffebee; color: #c62828; padding: 10px; margin-top: 10px; border-radius: 4px; border: 1px solid #ef5350;">
                <strong>📞 ACTION REQUIRED:</strong> Please call this client immediately.
            </div>
        </div>
        <div class="content">
            <div class="details">
                <div class="detail-row">
                    <span class="label">Name:</span> ${firstName} ${lastName}
                </div>
                <div class="detail-row">
                    <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="detail-row">
                    <span class="label">Phone:</span> <a href="tel:${phone}" style="font-weight:bold; font-size:1.1em;">${phone}</a>
                </div>
                <div class="detail-row">
                    <span class="label">Message:</span>
                    <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
            `,
        };

        // Confirmation email to client
        const clientMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "✅ Thank You for Contacting The UpGreat Expo!",
            html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #191970, #E6007E); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .cta-button { background: #E6007E; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Thank You, ${firstName}!</h1>
            <p>We've Received Your Message</p>
        </div>
        
        <div class="content">
            <h2>What Happens Next?</h2>
            <p>Our team will review your message and <strong>will be calling you shortly</strong> to discuss your exhibition goals.</p>
            
            <div class="details">
                <h3>Your Message:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <h3>Need Immediate Assistance?</h3>
            <p>Feel free to reach out to us directly:</p>
            <ul>
                <li>📞 <strong>Phone:</strong> +91 9088655513</li>
                <li>📧 <strong>Email:</strong> info@upgreatexpo.com</li>
                <li>🌐 <strong>Website:</strong> www.upgreatexpo.com</li>
            </ul>
            
            <p style="text-align: center;">
                <a href="tel:+919088655513" class="cta-button">📞 Call Us Now</a>
            </p>
            
            <h3>Why Choose The UpGreat Expo?</h3>
            <ul>
                <li>✅ India's Leading Exhibition Stand Designer</li>
                <li>✅ 200+ Successful Projects Delivered</li>
                <li>✅ ISO 9001 Certified</li>
                <li>✅ Turnkey Solutions</li>
                <li>✅ On-Time Delivery Guaranteed</li>
            </ul>
        </div>
        
        <div class="footer">
            <p><strong>The UpGreat Expo</strong></p>
            <p>Welldone Tech Park, Sector 48, Gurugram – 122018, Haryana, India</p>
            <p>📧 info@upgreatexpo.com | 📞 +91 9088655513</p>
            <p>🌐 www.upgreatexpo.com</p>
        </div>
    </div>
</body>
</html>
            `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);

        // Submit to Google Sheets
        await submitContactFormToGoogleSheets({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        return { success: true, message: "Message sent successfully! Check your email for confirmation." };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}
