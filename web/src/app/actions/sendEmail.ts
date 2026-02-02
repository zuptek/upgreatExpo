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
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !phone || !company || !message) {
        return { success: false, message: "Please fill in all fields." };
    }

    try {
        const emailUser = process.env.EMAIL_USER;
        const emailPassword = process.env.EMAIL_PASSWORD;

        if (!emailUser || !emailPassword) {
            console.error("EMAIL_USER or EMAIL_PASSWORD is missing");
            return { success: false, message: "Server configuration error. Please contact support." };
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailPassword,
            },
        });

        // Email to admin
        await transporter.sendMail({
            from: `"The UpGreat Expo" <${emailUser}>`,
            to: process.env.EMAIL_ADMIN || 'info.upgreatexpo@gmail.com',
            subject: `🎯 New Contact form: ${firstName} ${lastName}`,
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
                    <span class="label">Company:</span> ${company}
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
            `
        });

        // Confirmation email to client
        await transporter.sendMail({
            from: `"The UpGreat Expo" <${emailUser}>`,
            to: email,
            subject: "We’ve received your inquiry – The UpGreat Expo",
            html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; }
        .header { background: #191970; color: white; padding: 30px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; color: #fff; text-decoration: none; }
        .content { padding: 40px 30px; background-color: #ffffff; }
        .greeting { font-size: 18px; margin-bottom: 20px; color: #191970; font-weight: 600; }
        .message-body { color: #555; font-size: 16px; margin-bottom: 25px; }
        .highlight { color: #E6007E; font-weight: 600; }
        .inquiry-box { background-color: #f8f9fa; border-left: 4px solid #E6007E; padding: 15px; margin: 25px 0; font-style: italic; color: #555; }
        .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #e0e0e0; }
        .social-links { margin-top: 10px; }
        .social-links a { color: #191970; text-decoration: none; margin: 0 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">The UpGreat Expo</div>
        </div>
        
        <div class="content">
            <div class="greeting">Hi ${firstName},</div>
            
            <p class="message-body">
                Thank you for reaching out to <span class="highlight">The UpGreat Expo</span>, India’s leading exhibition and installed design experts—transforming your presence into impact.
            </p>
            
            <p class="message-body">
                We’ve successfully received your inquiry on behalf of ${company}.
            </p>
            
            <p class="message-body">Regarding your requirement:</p>
            
            <div class="inquiry-box">
                "${message}"
            </div>
            
            <p class="message-body">
                Our team is currently reviewing the details. One of our representatives will connect with you shortly to discuss how we can best support you at the Expo.
            </p>
            
            <p class="message-body">
                We appreciate your interest and look forward to speaking with you.
            </p>
            
            <p class="message-body" style="margin-top: 40px;">
                Best regards,<br>
                <strong>Team The UpGreat Expo</strong>
            </p>
        </div>
        
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} The UpGreat Expo. All rights reserved.</p>
            <p>Welldone Tech Park, Sector 48, Gurugram – 122018, Haryana, India</p>
            <p>
                <a href="https://www.upgreatexpo.com" style="color: #E6007E; text-decoration: none;">www.upgreatexpo.com</a>
            </p>
        </div>
    </div>
</body>
</html>
            `,
        });

        // Submit to Google Sheets
        await submitContactFormToGoogleSheets({
            firstName,
            lastName,
            email,
            phone,
            company,
            message
        });

        return { success: true, message: "Message sent!" };

    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}
