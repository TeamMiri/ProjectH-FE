import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

export async function postUserInfo(
  username: string,
  projectID: string,
  userinfo: Blob
) {
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/mypage',
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
