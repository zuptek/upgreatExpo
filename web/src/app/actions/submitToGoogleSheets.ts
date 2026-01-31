"use server";

export async function submitToGoogleSheets(formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    stallSize: string;
    requirements: string;
}) {
    try {
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        if (!googleSheetsUrl) {
            console.error('Google Sheets URL not configured');
            return {
                success: false,
                message: 'Configuration error. Please contact support.'
            };
        }

        // Server-side fetch - no CORS issues!
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
                stallSize: formData.stallSize,
                requirements: formData.requirements,
                timestamp: new Date().toISOString()
            })
        });

        // We can actually read the response now!
        const responseText = await response.text();

        console.log('Google Sheets Response Status:', response.status);
        console.log('Google Sheets Response:', responseText);

        if (response.ok || response.status === 302) {
            // Google Apps Script often returns 302 redirect on success
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
    message: string;
}) {
    try {
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        if (!googleSheetsUrl) {
            console.error('Google Sheets URL not configured');
            return {
                success: false,
                message: 'Configuration error. Please contact support.'
            };
        }

        // Server-side fetch
        const response = await fetch(googleSheetsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone || "Not Provided",
                company: "Contact Form Inquiry",
                stallSize: "N/A",
                requirements: formData.message,
                timestamp: new Date().toISOString(),
                formType: "Contact Us"
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
