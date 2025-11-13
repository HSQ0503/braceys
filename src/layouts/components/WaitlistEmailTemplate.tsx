import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Section,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface WaitlistEmailTemplateProps {
  firstName: string;
}

export function WaitlistEmailTemplate({ firstName }: WaitlistEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Heading style={h1}>Welcome to Braceys! 🦷</Heading>
          </Section>
          
          {/* Main Content */}
          <Section style={contentBox}>
            <Heading style={h2}>Hi {firstName}! 👋</Heading>
            <Text style={paragraph}>
              Thank you for joining the Braceys waitlist! We&apos;re thrilled to have you on board.
            </Text>
            <Text style={paragraph}>
              Braceys is your personal Invisalign® companion, designed to help you track your aligners, 
              get trusted advice, and stay on schedule with your treatment.
            </Text>
          </Section>

          {/* What's Next Section */}
          <Section style={section}>
            <Heading style={h3}>What&apos;s Next?</Heading>
            <Text style={listItem}>• You&apos;ll be among the first to know when we launch</Text>
            <Text style={listItem}>• Get exclusive early access to Braceys</Text>
            <Text style={listItem}>• Receive special launch offers and updates</Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Have questions? We&apos;d love to hear from you!
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Braceys. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
};

const headerSection = {
  textAlign: 'center' as const,
  marginBottom: '30px',
};

const h1 = {
  color: '#2563eb',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '0',
};

const contentBox = {
  backgroundColor: '#f8fafc',
  padding: '30px',
  borderRadius: '10px',
  marginBottom: '20px',
};

const h2 = {
  color: '#1e293b',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
  marginTop: '0',
};

const h3 = {
  color: '#1e293b',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
  marginTop: '0',
};

const paragraph = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '15px',
};

const section = {
  marginBottom: '30px',
};

const listItem = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '1.8',
  margin: '8px 0',
};

const hr = {
  borderColor: '#e2e8f0',
  marginTop: '40px',
  marginBottom: '20px',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  color: '#64748b',
  fontSize: '14px',
  marginBottom: '10px',
};

const footerCopyright = {
  color: '#94a3b8',
  fontSize: '12px',
  margin: '0',
};

