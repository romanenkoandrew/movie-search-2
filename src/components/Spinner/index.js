import React from 'react';
import { Spin, Modal } from 'antd';
import PropTypes from 'prop-types';

const Spinner = ({ isLoading }) => {
  return (
    <Modal
      footer={null}
      visible={isLoading}
      centered
      closable={false}
      maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
      width={0}
    >
      <Spin size='large' />
    </Modal>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
