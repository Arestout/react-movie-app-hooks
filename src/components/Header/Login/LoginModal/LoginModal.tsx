import React from 'react';

import { LoginForm } from '../LoginForm';
import { Modal, ModalBody } from 'reactstrap';
import { useAuth } from 'hooks/useAuth';

import './LoginModal.styles.scss';

export const LoginModal: React.FC = () => {
  const { auth, dispatchLoginModal } = useAuth();

  return (
    <Modal isOpen={auth.showLoginModal} toggle={dispatchLoginModal}>
      <ModalBody
        style={{
          backgroundColor: '#463a3a',
          padding: '40px 30px',
          border: '1px solid #fff',
        }}
      >
        <LoginForm />
      </ModalBody>
    </Modal>
  );
};
