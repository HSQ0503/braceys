# Resend Email Setup Guide

This guide explains how the Resend email integration works for the Braceys waitlist.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **API Key**: Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. **Domain Verification**: Verify your domain at [resend.com/domains](https://resend.com/domains)

## Environment Variables

Add your Resend API key and audience ID to your `.env.local` file:

```bash
RESEND_KEY=re_your_actual_api_key_here
RESEND_AUDIENCE_ID=aud_your_audience_id_here
```

**Note:** The `RESEND_AUDIENCE_ID` is required to store contacts in your Resend mailing list. Get your audience ID from [resend.com/audiences](https://resend.com/audiences) after creating an audience.

## Implementation Overview

### 1. Email Template Component
**Location**: `src/layouts/components/WaitlistEmailTemplate.tsx`

A React email template that sends a welcome message to users who join the waitlist.

### 2. API Route
**Location**: `src/app/api/waitlist/route.ts`

Handles waitlist submissions:
- Accepts POST requests with `name` and `email`
- Sends welcome email using Resend
- Returns success/error responses

### 3. Form Integration

**Main Contact Form**: `src/layouts/partials/ContactHero.tsx`
- Submits to `/api/waitlist`
- Shows loading state during submission
- Redirects to `/thank-you` on success
- Displays inline errors if failed

**Footer Subscription**: `src/layouts/partials/Footer.tsx`
- Quick email subscription form
- Shows loading state during submission
- Redirects to `/thank-you` on success
- Displays inline errors if failed

### 4. Thank You Page
**Location**: `src/app/thank-you/page.tsx`

Beautiful confirmation page shown after successful waitlist signup.

## Email Configuration

### Update the "From" Address

In `src/app/api/waitlist/route.ts`, the from address is now set to:

```typescript
from: 'Braceys <hello@braceysignup.com>',
to: [email],
```

**Current Setup**:
- **Production Domain**: `hello@braceysignup.com` (verified domain)
- **Note**: Make sure this domain is verified in your Resend dashboard at [resend.com/domains](https://resend.com/domains)

### Adding Contacts to Audience

Subscribers are automatically added to your Resend audience for email campaigns. To enable this:

1. **Create an Audience** in your Resend dashboard at [resend.com/audiences](https://resend.com/audiences)
2. **Get the Audience ID** from the audience settings (looks like `aud_xxxxxxxxxxxxx`)
3. **Add to your `.env` file**:

```bash
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxxx
```

The API route (`src/app/api/waitlist/route.ts`) automatically handles audience management:
- ✅ Sends welcome email to user
- ✅ Adds contact to Resend audience (if `RESEND_AUDIENCE_ID` is configured)
- ✅ Stores first name and last name
- ✅ Gracefully handles errors (email still sends even if audience addition fails)

## Testing

### Local Testing

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/contact`

3. Fill out the form and submit

4. Check the console for any errors

5. Check your email inbox (the email you submitted)

### Testing Checklist

- [ ] Email sends successfully
- [ ] Welcome email received in inbox
- [ ] Thank you page displays correctly (both forms redirect here)
- [ ] Contact form redirects to thank-you page
- [ ] Footer subscription form redirects to thank-you page
- [ ] Error messages display properly
- [ ] Loading states work as expected
- [ ] Contacts added to Resend audience (check dashboard)

## Production Deployment

Before deploying to production:

1. **Verify Your Domain** in Resend dashboard
2. **Update the From Address** to use your verified domain
3. **Add Audience ID** if using email campaigns
4. **Set Environment Variable** in your hosting platform (Vercel, Netlify, etc.)
5. **Test thoroughly** in production environment

### Environment Variables in Vercel

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `RESEND_KEY` with your API key
   - `RESEND_AUDIENCE_ID` with your audience ID
4. Redeploy your application

### Environment Variables in Netlify

1. Go to Site settings → Build & deploy → Environment
2. Add the following variables:
   - `RESEND_KEY`: Your Resend API key
   - `RESEND_AUDIENCE_ID`: Your Resend audience ID
3. Redeploy

## Customization

### Email Template Styling

Edit `src/layouts/components/WaitlistEmailTemplate.tsx` to customize:
- Colors and branding
- Email copy
- Layout and structure
- Logo and images

### Form Fields

To add more fields (e.g., phone number, company):

1. Update the form in `ContactHero.tsx`
2. Update the API route to accept new fields
3. Update the email template to display new fields
4. Update the audience contact creation

## Troubleshooting

### Email Not Sending

- Check that `RESEND_KEY` is set correctly
- Verify API key is valid in Resend dashboard
- Check server logs for error messages
- Ensure you're using a verified domain in production

### Form Not Submitting

- Check browser console for JavaScript errors
- Verify API route is accessible at `/api/waitlist`
- Check network tab for failed requests
- Ensure form validation is passing

### Thank You Page Not Loading

- Verify the route exists at `src/app/thank-you/page.tsx`
- Check for Next.js routing errors
- Ensure the redirect in `ContactHero.tsx` is correct

## API Response Examples

### Success Response
```json
{
  "success": true,
  "message": "Successfully joined waitlist",
  "emailId": "abc123..."
}
```

### Error Response
```json
{
  "error": "Name and email are required"
}
```

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Next.js Guide](https://resend.com/docs/send-with-nextjs)
- [Resend React Email](https://resend.com/docs/send-with-react)
- [Resend API Reference](https://resend.com/docs/api-reference/introduction)

## Support

If you need help:
1. Check Resend documentation
2. Review server logs for errors
3. Test with Resend's API testing tools
4. Contact Resend support if needed

