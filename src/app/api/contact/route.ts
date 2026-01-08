import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // For now, we just log the contact form data
        // In the future, you can integrate with Resend, SendGrid, or another email service here
        console.log("Contact form submission:", body);

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in contact form submission:", error);
        return NextResponse.json(
            { message: "Failed to send message." },
            { status: 500 }
        );
    }
}
