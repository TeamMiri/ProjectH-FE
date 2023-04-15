import { AxiosResponse } from 'axios';
import context from 'react-bootstrap/esm/AccordionContext';
import { APIinstance } from './axiosInstance';

export interface MyPageData {
  name: string;
  email: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
  Projs: string[];
}

export async function getUserInfo(userID: string) {
  try {
    const response: AxiosResponse<MyPageData> = await APIinstance.get(
      '/mypage',
      {
        params: { name: userID },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
