import { useState, ReactNode, ButtonHTMLAttributes } from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';
import { ModalContainer } from './styled';

interface ModalButtonProps extends ButtonProps {
  modalTitle: string;
  buttonTitle: string;
  children: ReactNode;
}

export function ModalButton({
  buttonTitle,
  modalTitle,
  children,
  ...props
}: ModalButtonProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn" {...props} onClick={handleShow}>
        {buttonTitle}
      </Button>
      <ModalContainer title={modalTitle} show={show} onClose={handleClose}>
        {children}
      </ModalContainer>
    </>
  );
}
