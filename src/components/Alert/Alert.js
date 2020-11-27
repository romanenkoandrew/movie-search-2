import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import styles from './Alert.styles';

const AlertMessage = ({ description, type, closeAlert }) => {
  React.useEffect(() => {
    setTimeout(closeAlert, 3000);
  }, []);
  return (
    <Alert
      css={styles.alert}
      message={type ? 'Error' : 'Success'}
      description={description}
      type={type ? 'error' : 'success'}
      onClose={closeAlert}
      closable
      showIcon
    />
  );
};

AlertMessage.propTypes = {
  description: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  closeAlert: PropTypes.func.isRequired,
};
export default AlertMessage;
