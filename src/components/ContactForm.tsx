import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { config } from '../config/environment';
import { trackEvent } from '../utils/analytics';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      if (!config.contact.emailServiceId || !config.contact.emailTemplateId || !config.contact.emailPublicKey) {
        throw new Error('Email service not configured');
      }

      await emailjs.send(
        config.contact.emailServiceId,
        config.contact.emailTemplateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Yoseph Berhane',
        },
        config.contact.emailPublicKey
      );

      setSubmitStatus('success');
      reset();
      trackEvent('contact_form_submit', { subject: data.subject });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      trackEvent('contact_form_error', { error: error instanceof Error ? error.message : 'Unknown error' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.name 
                ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
            }`}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.email 
                ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
            }`}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.subject 
                ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
            }`}
            placeholder="What's this about?"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message 
                ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
            }`}
            placeholder="Tell me about your project or question..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'loading'}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isSubmitting || submitStatus === 'loading'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 active:bg-primary/80 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            } text-white`}
          >
            {submitStatus === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              <p className="text-green-800 dark:text-green-200 font-medium">
                Message sent successfully!
              </p>
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm mt-1">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
              <p className="text-red-800 dark:text-red-200 font-medium">
                Failed to send message
              </p>
            </div>
            <p className="text-red-700 dark:text-red-300 text-sm mt-1">
              {errorMessage || 'Something went wrong. Please try again or contact me directly.'}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
