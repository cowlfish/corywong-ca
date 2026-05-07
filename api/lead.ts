import type { VercelRequest, VercelResponse } from '@vercel/node';

const ALLOWED_TYPES = ['buyer', 'seller', 'contact', 'newsletter'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, name, email, ...rest } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!ALLOWED_TYPES.includes(type)) {
    return res.status(400).json({ error: 'Invalid form type' });
  }

  if (type !== 'newsletter' && (!name || typeof name !== 'string')) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // TODO: Wire to kit.com API or email service (Resend/SendGrid) when credentials are provided.
  // For now, log the submission and return success.
  // In production, this should:
  //   1. Add the contact to kit.com (ConvertKit) via their API
  //   2. Send a notification email to Cory
  //   3. Optionally store in a database

  console.log(`[lead] type=${type} email=${email} name=${name || 'n/a'}`, rest);

  return res.status(200).json({ ok: true });
}
