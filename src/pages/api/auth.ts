// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

interface GoogleAPIResponse {
  name: string;
  id: string;
  email: string;
  picture: string;
}
const getGoogleUserData = async (
  accessToken: string
): Promise<GoogleAPIResponse | null> => {
  try {
    // access_token을 이용하여 Google OAuth API를 호출합니다.
    const response = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // API 호출 결과에서 사용자 이름과 아이디를 추출합니다.
    const { id, email, name, picture } = response.data;
    return { id, email, name, picture };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export interface ToFrontEndData extends GoogleAPIResponse {
  access_token: string;
  refresh_token: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ToFrontEndData | {}>
) {
  const code: string = (req.body.data as any).code;
  try {
    const googleRes = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      code: code,
      redirect_uri:
        process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH ??
        'http://localhost:3000/auth',
      grant_type: 'authorization_code',
    });
    const googledata = await getGoogleUserData(googleRes.data.access_token);
    if (googledata === null) {
      console.error('google api에서 사용자 정보를 받아오지 못함');
      throw 'google api에서 사용자 정보를 받아오지 못함';
    }
    //console.log(googledata);
    const serverAccessToken = jwt.sign(
      { ...googledata },
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      {
        subject: 'server access token',
        expiresIn: '60m',
        issuer: 'salahdin', //발급자
      }
    );
    const serverRefreshToken = jwt.sign(
      {},
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      {
        subject: 'server refresh token',
        expiresIn: '1m',
        issuer: 'salahdin', //발급자
      }
    );
    res.status(200).json({
      ...googledata,
      access_token: serverAccessToken,
      refresh_token: serverRefreshToken,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({});
  }
}
