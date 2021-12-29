import React from 'react';
import GlobalStyle from '../GlobalStyles';
import Button from '../Button';
import Modal from './Modal';
import { ModalProvider } from './ModalContext';
import useModal from './useModal';

export default {
  title: 'Example/Modal',
  component: Modal,
};

const ModalUser = () => {
  const { showModal, hideModal, hideAllModals } = useModal();

  const showSecondModal = () =>
    showModal(() => (
      <Modal title="Second modal">
        Testing Subsequent modal.
        <Modal.Actions>
          <Button onclick={hideModal} variant="secondary" label="Cancel" />
          <Button variant="danger" onclick={hideAllModals} label="OK" />
        </Modal.Actions>
      </Modal>
    ));

  const showFirstModal = () =>
    showModal(() => (
      <Modal title="First modal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur deserunt rerum, eos quos expedita sit quam mollitia illo incidunt, sed laboriosam odit beatae. Sunt quia earum debitis ratione voluptate?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla non quaerat quam ad sint nisi ipsa corporis corrupti animi ducimus saepe veniam, ab nesciunt, id fuga impedit, ipsum excepturi?
        <Modal.Actions>
          <Button onclick={hideModal} variant="secondary" label="Cancel" />
          <Button onclick={showSecondModal} label="Next modal" />
        </Modal.Actions>
      </Modal>
    ));

  return (
    <>
      <Button onclick={showFirstModal} label='Show modal' />
    </>
  );
};

const Template = () => {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <ModalUser />
      </ModalProvider>
    </>
  );
};

export const Default = Template.bind({});
