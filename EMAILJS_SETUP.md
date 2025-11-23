# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## 1. Create EmailJS Account

- Go to https://www.emailjs.com/
- Sign up for a free account (Free tier allows 200 emails/month)

## 2. Add Email Service

1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Save and copy your **Template ID**

## 4. Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (under API Keys section)

## 5. Update .env File

Add your credentials to `.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Restart Dev Server

After updating `.env`, restart your development server:

```bash
npm start
```

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check EmailJS dashboard for error logs
- Verify your email service is connected properly
- Check browser console for errors

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Add the environment variables to your hosting platform
2. Redeploy your application
