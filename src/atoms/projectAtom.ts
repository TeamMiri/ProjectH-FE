import { atom } from 'recoil';
import { defaultProjectInfo, ProjectInterface } from '@/models/ProjectModel';

const projectAtom = atom<ProjectInterface>({
  key: 'project',
  // 프로젝트정보
  default: defaultProjectInfo,
});

const projectImageAtom = atom<Blob | null>({
  key: 'projectprofile',
  // 이미지
  default: null,
});
export { projectAtom, projectImageAtom };
