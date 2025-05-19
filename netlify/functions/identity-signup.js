
exports.handler = async function(event, context) {
  const { user } = JSON.parse(event.body);
  
  // Only allow specific emails to sign up (modify this with your email)
  const allowedEmails = ['your-email@example.com'];
  
  if (!allowedEmails.includes(user.email)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: 'Forbidden - Email not allowed to sign up' })
    };
  }
  
  // Grant roles to the user
  const roles = ['admin'];
  
  return {
    statusCode: 200,
    body: JSON.stringify({ user, roles })
  };
};
