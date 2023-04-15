import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';
import { User } from '@/models/User';

export async function joinProject(username: string, projectID: string) {
  try {
    const response: AxiosResponse<User> = await APIinstance.get(
      '/projectJoin',
      {
        params: { name: userID },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function quitProject(username: string, projectID: string) {
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/projectJoin',
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
