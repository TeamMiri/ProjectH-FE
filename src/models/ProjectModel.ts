export interface ProjectInterface {
  ownerName: string;
  ownerId: string;
  title: string;
  projectId: string;
  projectImageUrl: File | null;
  totalNumber: number;
  nowJoinedMemberNum: number;
  memberIdList: string[];
  location: string;
  introduction: string;
  techSpec: string[];
  pdfFile: File | null;
  proposalUrl: string;
}

export const defaultProjectInfo: ProjectInterface = {
  title: 'testProject',
  ownerId: '123123123',
  projectImageUrl: null,
  techSpec: ['testScript1', 'testScript2'],
  ownerName: 'df',
  projectId: 'testProject김상훈',
  totalNumber: 4,
  nowJoinedMemberNum: 2,
  memberIdList: ['sanghun', '김상훈'],
  location: 'o',
  introduction: '이 프로젝트는 테스트 용도의 로렘 입슘입니다.',
  pdfFile: null,
  proposalUrl: '',
};
