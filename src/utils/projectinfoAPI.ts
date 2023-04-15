import { AxiosResponse } from 'axios';
import { ProjectInterface } from '@/models/ProjectModel';
import { APIinstance } from './axiosInstance';

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
export async function postProjectInfo(
  username: string,
  projectID: string,
  file: Blob
) {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/myportpolio',
      formData,
      {
        params: { username: username, projectID: projectID },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
