// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProjectInterface } from '@/models/ProjectModel';
import type { NextApiRequest, NextApiResponse } from 'next';
import { defaultProjectInfo } from '@/models/ProjectModel';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectInterface>
) {
  const projectName = Array.isArray(req.query.projectname)
    ? req.query.projectname[0]
    : req.query.projectname;
  if (projectName === null || projectName === undefined) {
    res.status(404);
    return;
  }
  res.status(200).json(defaultProjectInfo);
}
