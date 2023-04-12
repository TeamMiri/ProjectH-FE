export interface ProjectInterface {
  ownerName: string;
  projectName: string;
  projectid: string;
  pictureURL: string;
  maxMemberNum: number;
  nowJoinedMemberNum: number;
  userList: string[];
  offlineTask: string;
  introduce: string;
  techSpec: string[];
  pdfFile: File | null;
}

export const defaultProjectInfo: ProjectInterface = {
  projectName: 'testProject',
  pictureURL: '/testdoge.jpg',
  techSpec: ['testScript1', 'testScript2'],
  ownerName: '김상훈',
  projectid: 'testProject김상훈',
  maxMemberNum: 4,
  nowJoinedMemberNum: 2,
  userList: ['sanghun', '김상훈'],
  offlineTask: 'o',
  introduce: '이 프로젝트는 테스트 용도의 로렘 입슘입니다.',
  pdfFile: null,
};
