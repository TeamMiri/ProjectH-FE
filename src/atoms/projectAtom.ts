import { atom } from 'recoil';
import { defaultProjectInfo, ProjectInterface } from '@/models/ProjectModel';

const projectAtom = atom<ProjectInterface>({
  key: 'project',
  // 로그인한 사용자
  default: defaultProjectInfo,
});
export { projectAtom };
