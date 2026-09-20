import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  propertyType: string;
  location: string;
  estimatedBudget: string;
  preferredStart: string;
  message: string;
}

export interface QuoteFormData {
  projectType: string;
  propertyType: string;
  location: string;
  estimatedBudget: string;
  startDate: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  agreeTerms: boolean;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wyf43s6';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1gj2dqc';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QzzZ20Lo0pV55DokX';
const TARGET_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'satx@satxltd.com';

export const isEmailJsConfigured = (): boolean => {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
};

export const sendContactEmail = async (data: ContactFormData) => {
  if (!isEmailJsConfigured()) {
    console.warn(
      'EmailJS is not fully configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
    throw new Error('EmailJS configuration missing. Please provide your Service ID, Template ID, and Public Key in .env');
  }

  const formattedMessage = `
--- DIRECT CONTACT ENQUIRY ---
Client Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location || 'Not specified'}

Project Type: ${data.projectType}
Property Type: ${data.propertyType}
Estimated Budget: ${data.estimatedBudget}
Preferred Start: ${data.preferredStart}

Client Message / Scope:
${data.message}
------------------------------
`.trim();

  const templateParams = {
    // Recipient
    to_email: TARGET_EMAIL,

    // Client Name (all standard aliases)
    name: data.name,
    from_name: data.name,
    user_name: data.name,

    // Client Email & Reply-To (all standard aliases)
    email: data.email,
    from_email: data.email,
    user_email: data.email,
    reply_to: data.email,

    // Phone
    phone: data.phone,
    contact_number: data.phone,

    // Form Specific Fields
    location: data.location || 'Not specified',
    project_type: data.projectType,
    property_type: data.propertyType,
    estimated_budget: data.estimatedBudget,
    preferred_start: data.preferredStart,

    // The core message body that EmailJS templates print in {{message}}
    message: formattedMessage,

    // Subject
    subject: `New Contact Enquiry from ${data.name} - SATX LTD`
  };

  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

export const sendQuoteEmail = async (data: QuoteFormData) => {
  if (!isEmailJsConfigured()) {
    console.warn(
      'EmailJS is not fully configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
    throw new Error('EmailJS configuration missing. Please provide your Service ID, Template ID, and Public Key in .env');
  }

  const formattedQuoteSummary = `
--- NEW QUOTE REQUEST ---
Client Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location || 'Not specified'}

Project Type: ${data.projectType}
Property Type: ${data.propertyType}
Estimated Budget: ${data.estimatedBudget}
Preferred Start Date: ${data.startDate}

Project Description / Scope:
${data.description || 'No additional scope details provided.'}
-------------------------
`.trim();

  const templateParams = {
    // Recipient
    to_email: TARGET_EMAIL,

    // Client Name (all standard aliases)
    name: data.name,
    from_name: data.name,
    user_name: data.name,

    // Client Email & Reply-To (all standard aliases)
    email: data.email,
    from_email: data.email,
    user_email: data.email,
    reply_to: data.email,

    // Phone
    phone: data.phone,
    contact_number: data.phone,

    // Form Specific Fields
    location: data.location,
    project_type: data.projectType,
    property_type: data.propertyType,
    estimated_budget: data.estimatedBudget,
    start_date: data.startDate,
    description: data.description || 'No additional scope provided',

    // The core message body that EmailJS templates print in {{message}}
    message: formattedQuoteSummary,

    // Subject
    subject: `New Quote Request (${data.projectType}) from ${data.name} - SATX LTD`
  };

  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
