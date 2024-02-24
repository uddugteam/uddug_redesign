import sendgrid from '@sendgrid/mail';

const apikey = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(apikey ? apikey : '');

async function sendEmail(req: any, res: any) {
  try {
    // console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'contact@uddug.com',
      from: 'contact@uddug.com',
      subject: `Lead from site`,
      html: `<div>
        <p>Name - ${req.body.name}</p>
        <p>Email - ${req.body.email}</p>
        <p>Comment - ${req.body.text}</p>
      </div>`,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
