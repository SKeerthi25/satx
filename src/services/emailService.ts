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

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
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

  const templateParams = {
    to_email: TARGET_EMAIL,
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    location: data.location || 'Not specified',
    project_type: data.projectType,
    property_type: data.propertyType,
    estimated_budget: data.estimatedBudget,
    preferred_start: data.preferredStart,
    message: data.message,
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

  const templateParams = {
    to_email: TARGET_EMAIL,
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    project_type: data.projectType,
    property_type: data.propertyType,
    location: data.location,
    estimated_budget: data.estimatedBudget,
    start_date: data.startDate,
    description: data.description || 'No additional scope provided',
    subject: `New Quote Request (${data.projectType}) from ${data.name} - SATX LTD`
  };

  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
