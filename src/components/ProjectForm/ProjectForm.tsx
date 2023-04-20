import { useState } from 'react';
import { FormContainer, FormText } from './styled';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Pill } from '@/components/Pill/Pill';
import { ProjectInterface } from '@/models/ProjectModel';
import { projectAtom, projectImageAtom } from '@/atoms/projectAtom';
import { User } from '@/models/User';
import { userAtom } from '@/atoms/userAtom';
import { postProjectInfo } from '@/utils/projectinfoAPI';
import { authAtom } from '@/atoms/authAtom';

export function ProjectForm() {
  const [projectAtomValue, setFormValuesAtom] =
    useRecoilState<ProjectInterface>(projectAtom);
  const [selectedPDFFile, setSelectedPDFFile] = useState<File | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const atoken = useRecoilValue(authAtom);
  const logginedUser = useRecoilValue<User>(userAtom);
  const [_, setPdfBlob] = useRecoilState<string | null>(pdfAtom);
  const [__, setImageBlob] = useRecoilState<Blob | null>(projectImageAtom);
  const [text, setText] = useState<string>('');
  const [formValues, setFormValues] = useState<ProjectInterface>({
    ...projectAtomValue,
    ownerId: logginedUser.userId,
  });

  const handleAddPill = (): void => {
    if (text) {
      setFormValues(prev => ({ ...prev, techSpec: [...prev.techSpec, text] }));
      setText('');
    }
  };
  const handleRemovePill = (index: number): void => {
    const updatedPills = [...formValues.techSpec];
    updatedPills.splice(index, 1);
    setFormValues(prev => ({ ...prev, techSpec: updatedPills }));
  };
  //----------------------------------------------------------------------------------------

  function handlePDFChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    setFormValues(prev => ({ ...prev, pdfFile: file }));
    setSelectedPDFFile(file);
  }
  function handleImageFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    setFormValues(prev => ({
      ...prev,
      pictureURL: file,
    }));
    setSelectedImageFile(file);
  }
  //----------------------------------------------------------------------------------------

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postProjectInfo(formValues, atoken);
    // setPdfBlob(selectedPDFFile);
    setImageBlob(selectedImageFile);
    setFormValuesAtom(formValues);
    //axios에 제출한다.
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel label="프로젝트명을 입력해 주세요" className="mb-3">
          <Form.Control
            as="textarea"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel label="협업 가능한 위치" className="mb-3">
          <Form.Control
            as="textarea"
            id="location"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel label="최대 참여 가능한 사람 수" className="mb-3">
          <Form.Select
            id="totalNumber"
            name="totalNumber"
            value={formValues.totalNumber}
            onChange={handleChange}
            required
          >
            <option value={1}>1명</option>
            <option value={2}>2명</option>
            <option value={3}>3명</option>
            <option value={4}>4명</option>
            <option value={5}>5명</option>
            <option value={6}>6명</option>
          </Form.Select>
        </FloatingLabel>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="프로젝트의 기술 스택을 추가해 주세요"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddPill}>
          추가하기
        </Button>
        <div className="mt-3">
          {formValues.techSpec.map((pill: string, index: number) => (
            <div
              className="mx-1 my-1"
              key={index}
              onClick={() => handleRemovePill(index)}
            >
              <Pill className="p-3 " name={pill} />
            </div>
          ))}
        </div>
        <FloatingLabel label="프로젝트 소개를 입력해주세요" className="mb-3">
          <Form.Control
            as="textarea"
            id="introduction"
            name="introduction"
            value={formValues.introduction}
            onChange={handleChange}
            style={{ height: '100px' }}
            required
          />
        </FloatingLabel>
        <Form.Group className="mb-3">
          <FormText>프로젝트 제안서를 업로드하기</FormText>
          <Form.Control
            type="file"
            size="sm"
            accept=".pdf"
            onChange={handlePDFChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <FormText>프로젝트 소개 이미지를 업로드하기</FormText>
          <Form.Control
            type="file"
            size="sm"
            accept="image/png, image/jpeg"
            onChange={handleImageFileChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
}
