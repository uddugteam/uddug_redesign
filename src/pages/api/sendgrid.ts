import sendgrid from '@sendgrid/mail';

import type { NextApiRequest, NextApiResponse } from 'next';

const apikey = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(apikey ? apikey : '');

async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: 'contact@uddug.com',
      from: 'contact@uddug.com',
      subject: `Lead from the website - uddug.com`,
      html: `<div>
          <p>Name - ${req.body.name}</p>
          <p>Email - ${req.body.email}</p>
          <p>Comment - ${req.body.text}</p>
        </div>`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default POST;
