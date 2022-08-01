import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.API_KEY;
const LIST_ID = process.env.LIST_ID;
const SERVER_PREFIX = process.env.SERVER_PREFIX;

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
});

interface MailchimpError {
  response?: {
    text: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== 'POST') return res.status(405).json('Method Are Not Allowed');

  try {
    if (!API_KEY || !LIST_ID || !SERVER_PREFIX)
      return res.status(500).json('ENV error');
    const payload = JSON.parse(body);
    const response = await mailchimp.lists.addListMember(
      LIST_ID,
      {
        email_address: payload.email,
        merge_fields: {
          FNAME: payload.name,
          text: payload.text,
        },
        status: 'subscribed',
      },
      { skipMergeValidation: true }
    );
    const tagsResponse = await mailchimp.lists.updateListMemberTags(
      LIST_ID,
      payload.email.toLowerCase(),
      { tags: [{ name: payload.text, status: 'active' }] }
    );
    res.status(200).json(response);
  } catch (e) {
    const text = (e as MailchimpError).response?.text;
    if (!text) return res.status(500).json(e);
    const parsedText = JSON.parse(text);
    if (parsedText?.title === 'Member Exists')
      return res.status(200).json('Ok');
    return res.status(400).json(e);
  }
}
