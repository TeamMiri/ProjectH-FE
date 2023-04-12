// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { join } from 'path';
import fs from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const filePath = join(process.cwd(), 'public', 'sample.pdf');
  const fileContents = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(fileContents);
}
