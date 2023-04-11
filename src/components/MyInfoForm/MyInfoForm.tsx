import { useState } from 'react';
import { FormContainer, FormText } from './styled';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect } from 'react';

type FormValues = {
  age: number;
  sex: number;
  phoneNumber: string;
  offlineTask: string;
  introduce: string;
  techSpec: string[];
};

const initialFormValues: FormValues = {
  introduce: '',
  techSpec: ['JavaScript'],
  offlineTask: 'o',
  age: 0,
  sex: 0,
  phoneNumber: '01012341234',
};

export function MyInfoForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    console.log(file);
    setSelectedFile(file);
    // 이곳에 실행시키고 싶은 함수를 넣어주면 됩니다.
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('파일 + ', event.target.files);
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
        <FloatingLabel label="나이를 입력해 주세요" className="mb-3">
          <Form.Control
            as="textarea"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel label="성별" className="mb-3">
          <Form.Select
            id="sex"
            name="sex"
            value={formValues.sex}
            onChange={handleChange}
            required
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel label="전화번호를 입력해주세요" className="mb-3">
          <Form.Control
            min="11"
            max="11"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="010xxxxxxxx 형식으로 적어주세요"
            value={formValues.phoneNumber}
            onChange={handleChange}
            required
          ></Form.Control>
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
        <FloatingLabel label="자기소개를 입력해주세요" className="mb-3">
          <Form.Control
            as="textarea"
            id="introduce"
            name="introduce"
            value={formValues.introduce}
            onChange={handleChange}
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <Form.Group controlId="formFileSm" className="mb-3">
          <FormText>포트폴리오를 업로드하기</FormText>
          <Form.Control type="file" size="sm" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
}
