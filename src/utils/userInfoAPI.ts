import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

import { User } from '@/models/User';

export async function getUserInfo(userID: string) {
  try {
    const response: AxiosResponse<User> = await APIinstance.get('/mypage', {
      params: { name: userID },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

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
