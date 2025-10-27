import { WaitlistEmailTemplate } from '@/layouts/components/WaitlistEmailTemplate';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return Response.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Extract first name from full name
    const firstName = name.split(' ')[0];

    // Send welcome email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Braceys <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to the Braceys Waitlist! 🦷',
      react: WaitlistEmailTemplate({ firstName }),
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return Response.json(
        { error: 'Failed to send welcome email', details: emailError },
        { status: 500 }
      );
    }

    // Add contact to audience
    // Note: You'll need to create an audience in Resend dashboard and get the audience ID
    // Uncomment and add your audience ID when ready:
    /*
    const { data: audienceData, error: audienceError } = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: name.split(' ').slice(1).join(' '),
      unsubscribed: false,
      audienceId: 'YOUR_AUDIENCE_ID_HERE',
    });

    if (audienceError) {
      console.error('Error adding to audience:', audienceError);
      // Don't fail the request if audience addition fails
      // The email was still sent successfully
    }
    */

    return Response.json({
      success: true,
      message: 'Successfully joined waitlist',
      emailId: emailData?.id,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json(
      { error: 'An unexpected error occurred', details: String(error) },
      { status: 500 }
    );
  }
}

