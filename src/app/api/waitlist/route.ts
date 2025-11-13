import { WaitlistEmailTemplate } from '@/layouts/components/WaitlistEmailTemplate';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend client at runtime (not at module level)
    if (!process.env.RESEND_KEY) {
      console.error('RESEND_KEY is not configured');
      return Response.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_KEY);

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
      react: React.createElement(WaitlistEmailTemplate, { firstName }),
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return Response.json(
        { error: 'Failed to send welcome email', details: emailError },
        { status: 500 }
      );
    }

    // Add contact to Resend audience
    // Note: Replace 'YOUR_AUDIENCE_ID_HERE' with your actual audience ID from Resend dashboard
    // Get your audience ID from: https://resend.com/audiences
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    
    if (audienceId && audienceId !== 'YOUR_AUDIENCE_ID_HERE') {
      try {
        const lastName = name.split(' ').slice(1).join(' ') || '';
        
        const contactResponse = await resend.contacts.create({
          audienceId: audienceId,
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
        });

        if (contactResponse.error) {
          console.error('Error adding to audience:', contactResponse.error);
          // Don't fail the request if audience addition fails
          // The email was still sent successfully
        } else {
          console.log('Successfully added to audience:', contactResponse.data);
        }
      } catch (audienceException) {
        console.error('Exception adding to audience:', audienceException);
        // Continue - email was sent successfully even if audience addition failed
      }
    } else {
      console.warn('RESEND_AUDIENCE_ID not configured. User will receive email but will not be added to audience.');
    }

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

