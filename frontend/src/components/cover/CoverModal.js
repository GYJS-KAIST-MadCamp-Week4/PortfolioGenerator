import React from 'react'
import NavbarOne from './NavbarOne'
import { Fade } from 'react-awesome-reveal'
import CoverOne from './CoverOne'
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function CoverModal({ isOpen, onRequestClose, contentLabel, children }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
  >
    {children}
  </Modal>
  )
}

export default CoverModal
