import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

export interface MyPageData {
  name: string;
  email: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
  Projs: string[];
}

export async function getPortPolioPDF(username: string) {
  try {
    const response: AxiosResponse<Blob> = await APIinstance.get(
      '/myportpolio',
      {
        params: { username: username },
        responseType: 'blob',
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
