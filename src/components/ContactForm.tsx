import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

/** Encode form data as application/x-www-form-urlencoded for Netlify Forms */
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

export const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-app', ...data }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
      hasError
        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
    }`;

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact-app"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact-app" />
        <input type="hidden" name="bot-field" style={{ display: 'none' }} />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={fieldClass(!!errors.name)}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={fieldClass(!!errors.email)}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className={fieldClass(!!errors.subject)}
            placeholder="What's this about?"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={fieldClass(!!errors.message)}
            placeholder="Tell me about your project or question..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || submitStatus === 'loading'}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white ${
            isSubmitting || submitStatus === 'loading'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90 active:bg-primary/80 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {submitStatus === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-800 dark:text-green-200 font-medium">Message sent!</p>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                Thanks for reaching out — I'll get back to you within 24–48 hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-800 dark:text-red-200 font-medium">Failed to send</p>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  {errorMessage || 'Something went wrong. Please try again or email directly at '}
                  {!errorMessage && (
                    <a href="mailto:contact@yoseph.dev" className="underline">
                      contact@yoseph.dev
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
