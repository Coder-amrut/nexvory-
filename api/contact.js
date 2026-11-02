export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const name = body.name || 'Valued Client';
    
    return res.status(200).json({
      status: 'success',
      message: `Thank you, ${name}! Your enquiry has been received. Our leadership team (Amrutkiran & Pratik) will review your requirements and respond within 12 business hours.`
    });
  }

  return res.status(405).json({
    status: 'error',
    message: 'Method not allowed'
  });
}
