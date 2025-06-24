let fetch;
try {    
    fetch = globalThis.fetch;
} catch (e) {    
    fetch = require('node-fetch');
}

export async function handler(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {       
        const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
        const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

        if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
            console.error('Missing environment variables');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

        console.log('Function called with body:', event.body);
        
        let email;
        try {
            const body = JSON.parse(event.body || '{}');
            email = body.email;
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid JSON in request body' })
            };
        }

        if (!email) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Email is required' })
            };
        }

        console.log('Attempting to subscribe email:', email);
        console.log('Using publication ID:', BEEHIIV_PUBLICATION_ID);

        const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                reactivate_existing: false,
                send_welcome_email: true,
                utm_source: 'website',
                utm_medium: 'organic'
            })
        });

        const data = await response.json();
        console.log('Beehiiv response:', response.status, data);

        if (response.ok) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Successfully subscribed! Check your email to confirm.',
                    data: data
                })
            };
        } else {
            const errorMessage = data.errors?.[0]?.message || data.errors?.[0] || data.error || 'Subscription failed';
            console.error('Beehiiv API error:', data);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: errorMessage })
            };
        }

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Internal server error. Please try again later.',
                details: error.message 
            })
        };
    }
}