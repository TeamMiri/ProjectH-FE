import { useState, ReactNode, ButtonHTMLAttributes } from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';
import { ModalContainer } from './styled';

interface ModalButtonProps extends ButtonProps {
  modalTitle: string;
  buttonTitle: string;
  children: ReactNode;
}

export function ModalButton(props: ModalButtonProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn"
        variant={props.variant}
        size={props.size}
        onClick={handleShow}
      >
        {props.buttonTitle}
      </Button>
      <ModalContainer
        title={props.modalTitle}
        show={show}
        onClose={handleClose}
      >
        {props.children}
      </ModalContainer>
    </>
  );
}
