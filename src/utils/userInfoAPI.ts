import { AxiosResponse } from 'axios';
import APIinstance from './axiosInstance';

import { User } from '@/models/User';

export async function getUserInfo(id: string, token: string) {
  try {
    const response: AxiosResponse = await APIinstance.get(
      `/api/v1/users/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log('에러남');
    //console.error(error);
  }
}

export async function getAllUserInfo(token: string) {
  console.log(token);
  try {
    const response: AxiosResponse<User[]> = await APIinstance.get(
      '/api/v1/users',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    // console.error(error);
  }
}

export async function changeUserInfo(userData: User, token: string) {
  try {
    const container = {
      techSpec: userData.techSpec,
      age: parseInt(userData.age),
      gender: userData.gender,
      contactNumber: userData.contactNumber,
      location: userData.location,
      introduction: userData.introduction,
    };
    console.log(container);
    const a = await APIinstance.get(`/api/v1/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(a.data);
    const response: AxiosResponse = await APIinstance.put(
      `/api/v1/users/me`,
      container,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
