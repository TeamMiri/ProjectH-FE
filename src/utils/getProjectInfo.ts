import { AxiosResponse } from 'axios';
import { ProjectInterface } from '@/models/ProjectModel';
import { APIinstance } from './axiosInstance';

export interface MyPageData {
  name: string;
  email: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
  Projs: string[];
}

export async function getProjectInfo(projectID: string) {
  try {
    const response: AxiosResponse<ProjectInterface> = await APIinstance.get(
      '/projects',
      {
        params: { projectname: projectID },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
