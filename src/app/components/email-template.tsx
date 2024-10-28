import * as React from 'react';

interface EmailTemplateProps {
    email: string;
    content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email, content
}) => (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        maxWidth: '600px',
        margin: '0 auto'
    }}>
        <div style={{
            backgroundColor: '#4a90e2',
            padding: '10px',
            borderRadius: '8px 8px 0 0',
            textAlign: 'center',
            color: 'white'
        }}>
            <h2 style={{ margin: 0 }}>New Contact Form Submission</h2>
            <p style={{ margin: 0 }}>From Your Portfolio</p>
        </div>
        <div style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#4a90e2' }}>Contact Details</h3>
            <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Email:</strong> {email}</p>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', color: '#4a90e2' }}>Message:</h3>
                <p style={{
                    backgroundColor: '#fff',
                    padding: '15px',
                    borderRadius: '5px',
                    border: '1px solid #e0e0e0',
                    fontSize: '16px',
                    lineHeight: '1.6'
                }}>{content}</p>
            </div>
        </div>
        <footer style={{
            textAlign: 'center',
            padding: '10px 0',
            borderTop: '1px solid #e0e0e0',
            marginTop: '20px',
            fontSize: '14px',
            color: '#888'
        }}>
            <p>Received via <a href="https://your-portfolio-link.com" style={{ color: '#4a90e2', textDecoration: 'none' }}>My Portfolio</a></p>
        </footer>
    </div>
);
