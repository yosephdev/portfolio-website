import { useState } from 'react';

export const useBeehiivSubscription = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const subscribe = async (email: string) => {
        setIsSubmitting(true);
        setError('');

        try {
            console.log('Subscribing email:', email);
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Please enter a valid email address');
            }
            
            const isDev = window.location.hostname === 'localhost';
            const functionUrl = isDev
                ? 'http://localhost:8888/.netlify/functions/subscribe'
                : '/.netlify/functions/subscribe';

            console.log('Using function URL:', functionUrl);

            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            console.log('Response status:', response.status);

            const responseText = await response.text();
            console.log('Response text:', responseText);

            if (!response.ok) {
                let errorMessage = 'Subscription failed. Please try again.';
                try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData.error || errorMessage;
                } catch (e) {                    
                    console.error('Error parsing response:', e);
                }
                throw new Error(errorMessage);
            }

            if (!responseText) {
                throw new Error('Empty response from server');
            }

            const data = JSON.parse(responseText);
            console.log('Parsed data:', data);

            if (data.success) {
                setIsSuccess(true);
            } else {
                setError(data.error || 'Subscription failed. Please try again.');
            }

        } catch (err) {
            console.error('Subscription error:', err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Network error. Please check your connection and try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const reset = () => {
        setIsSuccess(false);
        setError('');
    };

    return {
        subscribe,
        isSubmitting,
        isSuccess,
        error,
        reset
    };
};
