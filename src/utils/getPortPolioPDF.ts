import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

export async function getPortPolioPDF(username: string) {
  try {
    const response: AxiosResponse<Blob> = await APIinstance.get(
      '/myportpolio',
      {
        responseType: 'blob',
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
