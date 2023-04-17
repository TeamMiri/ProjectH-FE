// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/models/User';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const username = Array.isArray(req.query.name)
    ? req.query.name[0]
    : req.query.name;
  if (username === null || username === undefined) {
    res.status(404);
    return;
  }
  const sampleData: User = {
    name: username,
    email: username + '@default.com',
    introduction:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a gravida nunc. Proin erat tortor, interdum id venenatis sit amet, convallis eget sapien. Integer nisi turpis, convallis quis purus et, vehicula tempus diam. Ut et neque nulla. Ut posuere lacinia est, ac facilisis velit fermentum aliquam. Ut vulputate consectetur nibh, eget mollis magna fringilla vel. Ut sit amet bibendum nibh. Nulla at urna imperdiet felis accumsan condimentum. Phasellus vel lobortis urna. Duis arcu felis, interdum sed urna vel, posuere auctor nulla. Etiam rutrum urna id felis ultricies pulvinar. Fusce eleifend ex et egestas rhoncus. Praesent tempus metus vitae turpis facilisis, vel vulputate nisi ultricies. Etiam ut mauris urna. Integer nec dolor sed nulla rutrum hendrerit. Etiam pellentesque neque ut diam auctor dictum.',
    profileImageUrl:
      'https://lh3.googleusercontent.com/a/AGNmyxZVJ5hIY1GMZw0H8kMaGAQcA3cC8kkA3mYVChPwSA=s96-c',
    techSpec: ['react', 'next.js', 'Node.js', 'TypeScript'],
    userId: '1',
    age: 0,
    gender: 0,
    contactNumber: '111',
    location: '111',
    pdfFile: null,
  };
  res.status(200).json(sampleData);
}
