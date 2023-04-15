import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

export async function postPortPolioPDF(username: string) {
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
