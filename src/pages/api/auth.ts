// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  access_token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const code: string = (req.body.data as any).code;
  console.log(code);
  try {
    const googleRes = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      code: code,
      redirect_uri: 'http://localhost:3000/auth',
      grant_type: 'authorization_code',
    });
    console.log(googleRes.data.access_token);
    res.status(200).json({ access_token: googleRes.data.access_token });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ access_token: err });
  }
}
