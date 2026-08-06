import emailjs from '@emailjs/browser';

export const sendPortfolioMessage = async ({ name, email, subject, message }) => {
  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim();
  const cleanSubject = (subject || `Portfolio Message from ${cleanName}`).trim();
  const cleanMessage = (message || '').trim();

  // Save to local backup in localStorage so message is NEVER lost
  try {
    const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    existing.push({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('portfolio_messages', JSON.stringify(existing));
  } catch (err) {
    console.warn("LocalStorage save warning:", err);
  }

  let sent = false;

  // 1. Try EmailJS with all common parameter aliases
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: cleanName,
          name: cleanName,
          user_name: cleanName,
          from_email: cleanEmail,
          email: cleanEmail,
          user_email: cleanEmail,
          reply_to: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          user_message: cleanMessage,
          to_name: 'Prakash',
        },
        publicKey
      );
      sent = true;
    }
  } catch (err) {
    console.warn("EmailJS attempt failed:", err);
  }

  // 2. Try FormSubmit free serverless email dispatcher API
  if (!sent) {
    try {
      const formSubmitRes = await fetch('https://formsubmit.co/ajax/prakashdasdev1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          _replyto: cleanEmail,
          _subject: cleanSubject,
          message: cleanMessage,
        }),
      });
      if (formSubmitRes.ok) {
        sent = true;
      }
    } catch (err) {
      console.warn("FormSubmit attempt failed:", err);
    }
  }

  // 3. Try Backend Node.js API if configured and valid
  const isProd = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
  const apiUrl = import.meta.env.VITE_API_URL;
  if (!sent && apiUrl && (!isProd || !apiUrl.includes('localhost'))) {
    try {
      const res = await fetch(`${apiUrl}/api/ai/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, subject: cleanSubject, message: cleanMessage }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sent = true;
      }
    } catch (err) {
      console.warn("Backend API attempt failed:", err);
    }
  }

  return sent;
};
