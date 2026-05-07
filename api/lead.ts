import type { VercelRequest, VercelResponse } from '@vercel/node';

const KIT_API_URL = 'https://api.kit.com/v4';
const ALLOWED_TYPES = ['buyer', 'seller', 'contact', 'newsletter'];

async function kitRequest(path: string, body: Record<string, unknown>) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) throw new Error('KIT_API_KEY not configured');

  const res = await fetch(`${KIT_API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && res.status !== 200 && res.status !== 201 && res.status !== 202) {
    const text = await res.text();
    throw new Error(`Kit API ${res.status}: ${text}`);
  }

  return res.json();
}

function buildCustomFields(type: string, data: Record<string, unknown>): Record<string, string> {
  const fields: Record<string, string> = { Source: `realestate.corywong.ca/${type}` };

  if (data.budget) fields['Budget'] = String(data.budget);
  if (data.timeline) fields['Timeline'] = String(data.timeline);
  if (data.neighbourhoods) fields['Neighbourhoods'] = String(data.neighbourhoods);
  if (data.address) fields['Address'] = String(data.address);
  if (data.phone) fields['Phone Number'] = String(data.phone);
  if (data.subject) fields['Subject'] = String(data.subject);
  if (data.notes) fields['Notes'] = String(data.notes);
  if (data.message) fields['Notes'] = String(data.message);

  return fields;
}

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

  try {
    const firstName = typeof name === 'string' ? name.split(' ')[0] : undefined;
    const fields = buildCustomFields(type, rest);

    await kitRequest('/subscribers', {
      email_address: email,
      first_name: firstName,
      state: 'active',
      fields,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(`[lead] kit.com error for type=${type}:`, err);
    return res.status(502).json({ error: 'Failed to process submission' });
  }
}
