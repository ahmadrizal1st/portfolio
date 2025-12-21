export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const response = await fetch("/api/resend/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ahmaddrizalul@gmail.com", // Replace with your actual email
        subject: data.subject,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return { success: false, error: result };
    }

    // Check if the response contains an 'id' (success) or 'error' (failure)
    if (result.id) {
      console.log("Email sent successfully with ID:", result.id);
      return { success: true, data: result };
    } else if (result.error) {
      console.error("Resend API returned error in body:", result.error);
      return { success: false, error: result.error };
    } else {
      console.warn("Unexpected Resend API response:", result);
      return {
        success: false,
        error: "Unexpected response from email service",
      };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error };
  }
}
