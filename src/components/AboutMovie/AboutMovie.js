import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import styles from './AboutMovie.styles';

const AboutMovie = ({ isOpenModal, toggleModal }) => {
  const closeModal = () => {
    toggleModal({ isOpenModal: !isOpenModal });
  };
  return (
    <Modal
      title='test'
      width={1000}
      centered
      footer={null}
      visible={isOpenModal}
      onCancel={closeModal}
    ></Modal>
  );
};

AboutMovie.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default AboutMovie;
