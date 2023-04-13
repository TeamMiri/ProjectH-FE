import { useState } from 'react';
import { FormContainer, FormText } from './styled';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState } from 'recoil';
import { Pill } from '@/components/Pill/Pill';
import { ProjectInterface } from '@/models/ProjectModel';
import { projectAtom, projectImageAtom } from '@/atoms/projectAtom';

export function ProjectForm() {
  const [projectAtomValue, setFormValuesAtom] =
    useRecoilState<ProjectInterface>(projectAtom);
  const [selectedPDFFile, setSelectedPDFFile] = useState<File | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [_, setPdfBlob] = useRecoilState<Blob | null>(pdfAtom);
  const [__, setImageBlob] = useRecoilState<Blob | null>(projectImageAtom);
  const [text, setText] = useState<string>('');
  const [formValues, setFormValues] =
    useState<ProjectInterface>(projectAtomValue);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPdfBlob(selectedPDFFile);
    setImageBlob(selectedImageFile);
    setFormValuesAtom(formValues);
    //axios에 제출한다.
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

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
            id="age"
            name="age"
            value={formValues.projectName}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel label="오프라인 참석 가능 여부" className="mb-3">
          <Form.Select
            id="offlineTask"
            name="offlineTask"
            value={formValues.offlineTask}
            onChange={handleChange}
            required
          >
            <option value="o">오프라인 참여 가능</option>
            <option value="x">오프라인 참여 불가</option>
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
            id="introduce"
            name="introduce"
            value={formValues.introduce}
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
