import React from 'react';
import SideMenu from 'components/SideMenu';
import MainContent from 'components/MainContent';
import AlertMessage from 'components/Alert/Alert';
import PropTypes from 'prop-types';
import { Typography, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Main.styles';

const { Text, Link, Title } = Typography;

const { Header, Content, Footer } = Layout;

const Main = (props) => {
  const { sideMenuIsOpen, alert, isError, hideAlert } = props;
  return (
    <Layout css={styles.layoutContainer}>
      {alert && (
        <AlertMessage
          description={alert}
          type={isError}
          closeAlert={hideAlert}
        />
      )}
      <SideMenu />
      <Layout>
        <Header css={styles.header(sideMenuIsOpen)}>
          <Title>Movie Search v.2.0</Title>
        </Header>
        <Content css={styles.content}>
          <MainContent />
        </Content>
        <Footer css={styles.footer}>
          <Link href='mailto:ramanenkaandrew@gmail.com'>
            Created by Andrew Ramanenka
          </Link>
          <Link href='https://github.com/romanenkoandrew' target='_blank'>
            <GithubOutlined />
            GitHub
          </Link>
        </Footer>
      </Layout>
    </Layout>
  );
};
Main.propTypes = {
  sideMenuIsOpen: PropTypes.bool.isRequired,
  alert: PropTypes.string,
  isError: PropTypes.bool,
  hideAlert: PropTypes.func.isRequired,
};
export default Main;
