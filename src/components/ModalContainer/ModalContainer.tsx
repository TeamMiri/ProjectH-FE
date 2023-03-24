import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

interface ModalContainerInterface {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}
const ModalBody = styled(Modal.Body)`
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.fontColor};
`;
const ModalHeader = styled(Modal.Header)`
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.fontColor};
`;
const ModalFooter = styled(Modal.Footer)`
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.fontColor};
`;
export function ModalContainer(props: ModalContainerInterface) {
  return (
    <Modal
      // dialogClassName="modal-90w"
      size="xl"
      onHide={props.onClose}
      show={props.show}
      // style={{ width: '100vw' }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        <Button onClick={props.onClose}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}
