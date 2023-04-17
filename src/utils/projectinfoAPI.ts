import { AxiosResponse } from 'axios';
import { ProjectInterface } from '@/models/ProjectModel';
import { APIinstance } from './axiosInstance';

export async function getProjectInfo(projectID: string) {
  try {
    const response: AxiosResponse<ProjectInterface> = await APIinstance.get(
      `/api/projects/${projectID}`,
      {
        params: { projectname: projectID },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function postUserInfo(projData: ProjectInterface) {
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/api/project',
      projData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
