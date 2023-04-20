import { useState } from 'react';
import { FormContainer, FormText } from './styled';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { myPageUserAtom, userAtom } from '@/atoms/userAtom';
import { Pill } from '@/components/Pill/Pill';
import { User } from '@/models/User';
import { changeUserInfo } from '@/utils/userInfoAPI';
import { authAtom } from '@/atoms/authAtom';
import { postUserPDF } from '@/utils/pdfAPI';

export function MyInfoForm() {
  const [formValuesAtom, setFormValuesAtom] =
    useRecoilState<User>(myPageUserAtom);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [_, setPdfBlob] = useRecoilState<string | null>(pdfAtom);
  const userinfo = useRecoilValue(userAtom);
  const token = useRecoilValue(authAtom);
  const [text, setText] = useState<string>('');
  const [formValues, setFormValues] = useState<User>(formValuesAtom);

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

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    setFormValues(prev => ({ ...prev, pdfFile: file }));
    setSelectedFile(file);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await changeUserInfo(formValues, token);
    if (selectedFile != null) {
      await postUserPDF(userinfo.userId, selectedFile);
      setPdfBlob(window.URL.createObjectURL(selectedFile)); // 여기 URL로.
    } // src={window.URL.createObjectURL(pdfBlob)}
    alert('수정되었습니다.');
    setFormValuesAtom(formValues);
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
        <FloatingLabel label="나이를 입력해 주세요" className="mb-3">
          <Form.Control
            as="input"
            type="number"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel label="성별" className="mb-3">
          <Form.Select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            required
          >
            <option value="M">남성</option>
            <option value="F">여성</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel label="전화번호를 입력해주세요" className="mb-3">
          <Form.Control
            min="11"
            max="11"
            id="contactNumber"
            name="contactNumber"
            placeholder="010xxxxxxxx 형식으로 적어주세요"
            value={formValues.contactNumber}
            onChange={handleChange}
            required
          ></Form.Control>
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
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddPill}>
          기술 스택을 추가해 주세요
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
        <FloatingLabel label="자기소개를 입력해주세요" className="mb-3">
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
        <Form.Group controlId="formFileSm" className="mb-3">
          <FormText>포트폴리오를 업로드하기</FormText>
          <Form.Control
            type="file"
            size="sm"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
}
