import { AxiosResponse } from 'axios';
import { ProjectInterface } from '@/models/ProjectModel';
import APIinstance from './axiosInstance';

export async function getAllProjectInfo(token: string) {
  try {
    const response: AxiosResponse = await APIinstance.get(`/api/project`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectInfo(projectID: string, token: string) {
  try {
    const response: AxiosResponse = await APIinstance.get(
      `/api/project/${projectID}`,
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

export async function postProjectInfo(
  projData: ProjectInterface,
  token: string
) {
  const container = {
    title: projData.title,
    ownerId: projData.ownerId,
    totalNumber: projData.totalNumber,
    techSpec: projData.techSpec,
    introduction: projData.introduction,
    location: projData.location,
    status: 'OPEN',
  };
  console.log(container);
  try {
    const response: AxiosResponse = await APIinstance.post(
      '/api/project',
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

export async function changeProjectInfo(
  projData: ProjectInterface,
  token: string
) {
  const container = {
    title: projData.title,
    ownerId: projData.ownerId,
    totalNumber: projData.totalNumber,
    techSpec: projData.techSpec,
    introduction: projData.introduction,
    location: projData.location,
    status: 'OPEN',
  };
  console.log(container);
  try {
    const response: AxiosResponse = await APIinstance.put(
      `/api/project/${projData.projectId}`,
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
