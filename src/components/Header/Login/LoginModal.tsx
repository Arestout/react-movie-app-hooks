import React from 'react';
import { LoginForm } from './LoginForm';
import { Modal, ModalBody } from 'reactstrap';
import { useAuth } from 'hooks/useAuth';

export const LoginModal: React.FC = () => {
  const { auth, dispatchLoginModal } = useAuth();

  return (
    <Modal isOpen={auth.showLoginModal} toggle={dispatchLoginModal}>
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
};
