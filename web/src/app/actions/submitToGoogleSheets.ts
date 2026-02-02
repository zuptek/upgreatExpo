"use server";

export async function submitToGoogleSheets(formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    stallSize: string;
    requirements: string;
    formName?: string;
}) {
    try {
        // Fallback to .env.local URL if process.env is not loaded (e.g. server not restarted)
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "https://script.google.com/macros/s/AKfycbzX9LKfuyuJv4kNKFtRz0qKmjdofb9jGdwreKsdyOs_AD3awH5s-s-TWy10v941qFlt/exec";

        console.log('Checking Google Sheets URL configuration:', googleSheetsUrl ? 'Present' : 'Missing');

        if (!googleSheetsUrl) {
            console.error('Google Sheets URL not configured');
            return {
                success: false,
                message: 'Configuration error. Please contact support.'
            };
        }

        // Combine specific fields into a generic "details" field
        const details = `Stall Size: ${formData.stallSize}, Requirements: ${formData.requirements}`;

        const response = await fetch(googleSheetsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                details: details, // Unified column
                timestamp: new Date().toISOString(),
                formName: formData.formName || "Unknown Form"
            })
        });

        const responseText = await response.text();
        console.log('Google Sheets Response Status:', response.status);

        if (response.ok || response.status === 302) {
            return {
                success: true,
                message: 'Form submitted successfully!'
            };
        } else {
            console.error('Google Sheets error:', responseText);
            return {
                success: false,
                message: 'Failed to submit. Please try again.'
            };
        }

    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return {
            success: false,
            message: 'Network error. Please try again.'
        };
    }
}

export async function submitContactFormToGoogleSheets(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}) {
    try {
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "https://script.google.com/macros/s/AKfycbzX9LKfuyuJv4kNKFtRz0qKmjdofb9jGdwreKsdyOs_AD3awH5s-s-TWy10v941qFlt/exec";

        if (!googleSheetsUrl) {
            console.error('Google Sheets URL not configured');
            return {
                success: false,
                message: 'Configuration error. Please contact support.'
            };
        }

        const response = await fetch(googleSheetsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone || "Not Provided",
                company: formData.company, // Use actual company name
                details: formData.message, // Map message to details
                timestamp: new Date().toISOString(),
                formName: "Contact Us"
            })
        });

        const responseText = await response.text();
        console.log('Contact Form - Google Sheets Response Status:', response.status);

        if (response.ok || response.status === 302) {
            return {
                success: true,
                message: 'Form submitted manually to sheets!'
            };
        } else {
            console.error('Google Sheets error:', responseText);
            return {
                success: false,
                message: 'Failed to submit to sheets.'
            };
        }

    } catch (error) {
        console.error('Error submitting contact form to Google Sheets:', error);
        return {
            success: false,
            message: 'Network error submitting to sheets.'
        };
    }
}
