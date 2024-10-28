import * as React from 'react';

interface EmailTemplateProps {
    email: string;
    content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email, content
}) => (
    <div>
        <h1>Email: {email}</h1>
        <p>Content: {content}</p>
    </div>
);
