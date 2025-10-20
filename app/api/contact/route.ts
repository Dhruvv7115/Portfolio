import { NextResponse } from "next/server";
import { CreateEmailResponse, Resend } from "resend";

// Initialize the Resend client using your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Define the type of the expected request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Handle POST requests sent to /api/contact
export async function POST(req: Request) {
  try {
    // Parse the JSON body of the request
    const { name, email, message } = (await req.json()) as ContactFormData;

    // Validate that all fields are provided
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send the email using the Resend API
    const data: CreateEmailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Temporary sender address
      to: process.env.EMAIL_TO as string, // Recipient (you)
      subject: `New message from ${name}`,
      replyTo: email, // So you can reply directly to the sender
      html: `
        <div style="
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: #0a0a0a;
          color: #e5e5e5;
          padding: 32px 24px;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          max-width: 600px;
          margin: 0 auto;
        ">
          <h2 style="
            margin: 0 0 24px 0;
            font-weight: 600;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: -0.02em;
          ">
            New Message
          </h2>
        
          <div style="
            background-color: #151515;
            border: 1px solid #2a2a2a;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 16px;
          ">
            <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6;">
              <span style="color: #888; font-size: 13px;">From</span><br/>
              <strong style="color: #ffffff; font-size: 16px;">${name}</strong>
            </p>
            
            <p style="margin: 0; font-size: 14px; line-height: 1.6;">
              <span style="color: #888; font-size: 13px;">Email</span><br/>
              <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
            </p>
          </div>
        
          <div style="
            background-color: #151515;
            border: 1px solid #2a2a2a;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 24px;
          ">
            <p style="color: #888; font-size: 13px; margin: 0 0 12px 0;">Message</p>
            <p style="
              white-space: pre-wrap;
              font-size: 15px;
              line-height: 1.7;
              margin: 0;
              color: #e5e5e5;
            ">
        ${message}
            </p>
          </div>
        
          <div style="
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #2a2a2a;
          ">
            <p style="
              margin: 0;
              font-size: 13px;
              color: #666;
            ">
              dhruvsabharwal.vercel.app
            </p>
          </div>
        </div>
      `,
    });

    // If Resend API returns an error, throw it
    if (data.error) throw new Error(data.error.message);

    // Respond with success
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
