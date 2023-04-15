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
