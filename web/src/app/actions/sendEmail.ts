"use server";

import nodemailer from "nodemailer";

interface EmailState {
    success: boolean;
    message: string;
}

export async function sendEmail(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !message) {
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

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "wings.recr@gmail.com",
            subject: `New Message from UpgreatExpo: ${firstName} ${lastName}`,
            text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
            `,
            html: `
<h3>New Message from UpgreatExpo</h3>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}
