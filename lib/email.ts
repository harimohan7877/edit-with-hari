import { Resend } from "resend";
import { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export async function sendContactEmail(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured - email skipped");
    return { success: false, error: "Email not configured" };
  }
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "noreply@editwithhari.com",
      to: process.env.ADMIN_EMAIL || "hari@editwithhari.com",
      subject: `New Inquiry from ${data.name} - ${data.projectType}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        ${data.deadline ? `<p><strong>Deadline:</strong> ${data.deadline}</p>` : ""}
        <h3>Message:</h3>
        <p>${data.message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false, error };
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured - confirmation email skipped");
    return { success: false, error: "Email not configured" };
  }
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "noreply@editwithhari.com",
      to: data.email,
      subject: "Thank you for reaching out - Edit With Hari",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Thank you for your project inquiry! I've received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of your inquiry:</p>
        <ul>
          <li><strong>Project Type:</strong> ${data.projectType}</li>
          <li><strong>Budget:</strong> ${data.budget}</li>
        </ul>
        <p>Looking forward to discussing your project!</p>
        <br>
        <p>Best regards,<br>Hari<br>Edit With Hari</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Confirmation email failed:", error);
    return { success: false, error };
  }
}