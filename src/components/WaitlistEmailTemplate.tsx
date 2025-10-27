import * as React from 'react';

interface WaitlistEmailTemplateProps {
  firstName: string;
}

export function WaitlistEmailTemplate({ firstName }: WaitlistEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2563eb', fontSize: '32px', marginBottom: '10px' }}>Welcome to Braceys! 🦷</h1>
      </div>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#1e293b', fontSize: '24px', marginBottom: '15px' }}>
          Hi {firstName}! 👋
        </h2>
        <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
          Thank you for joining the Braceys waitlist! We're thrilled to have you on board.
        </p>
        <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
          Braceys is your personal Invisalign® companion, designed to help you track your aligners, 
          get trusted advice, and stay on schedule with your treatment.
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1e293b', fontSize: '20px', marginBottom: '15px' }}>
          What's Next?
        </h3>
        <ul style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>You'll be among the first to know when we launch</li>
          <li>Get exclusive early access to Braceys</li>
          <li>Receive special launch offers and updates</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '10px' }}>
          Have questions? We'd love to hear from you!
        </p>
        <p style={{ color: '#94a3b8', fontSize: '12px' }}>
          © {new Date().getFullYear()} Braceys. All rights reserved.
        </p>
      </div>
    </div>
  );
}

