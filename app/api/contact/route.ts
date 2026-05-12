import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail, sendConfirmationEmail } from "@/lib/email";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const inquiry = await prisma.inquiry.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        projectType: validatedData.projectType,
        budget: validatedData.budget,
        deadline: validatedData.deadline,
        message: validatedData.message,
        status: "new",
      },
    });

    try {
      await sendContactEmail(validatedData);
      await sendConfirmationEmail(validatedData);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      data: inquiry,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}