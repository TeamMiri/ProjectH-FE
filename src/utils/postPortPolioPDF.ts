import { AxiosResponse } from 'axios';
import { APIinstance } from './axiosInstance';

export async function getPortPolioPDF(username: string, file: Blob) {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response: AxiosResponse<Blob> = await APIinstance.post(
      '/myportpolio',
      formData,
      {
        params: { username: username },
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
