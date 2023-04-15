import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';
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
