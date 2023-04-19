import { AxiosResponse } from 'axios';
import APIinstance from './axiosInstance';

export async function getUserPortPolioPDF(username: string) {
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

export async function getProjPDF(username: string, token: string) {
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

export async function postProjPDF(username: string, file: Blob) {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response: AxiosResponse = await APIinstance.post(
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

export async function postUserPDF(username: string, file: File) {
  const formData = new FormData();
  formData.append('file', file);
  console.log(formData);
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/api/file/upload/portfolio',
      formData,
      {
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
