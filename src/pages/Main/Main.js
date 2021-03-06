import React from 'react';
import SideMenu from 'components/SideMenu';
import MainContent from 'components/MainContent';
import AlertMessage from 'components/Alert/Alert';
import PropTypes from 'prop-types';
import { Typography, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Main.styles';
import Spinner from 'components/Spinner';
import { getFromLS } from 'helpers/localStorage';
import {
  WATCH_LIST,
  VIEWED_LIST,
  FAVORITE_LIST,
  BLACK_LIST,
} from 'constants/routing';

const { Link, Title } = Typography;

const { Header, Content, Footer } = Layout;

const Main = (props) => {
  const {
    sideMenuIsOpen,
    alert,
    isError,
    hideAlert,
    isLoadingModal,
    getFirstData,
  } = props;
  React.useEffect(() => {
    const watchList = getFromLS(WATCH_LIST);
    const viewedList = getFromLS(VIEWED_LIST);
    const favoriteList = getFromLS(FAVORITE_LIST);
    const blackList = getFromLS(BLACK_LIST);
    getFirstData({
      watchList: watchList,
      viewedList: viewedList,
      favoriteList: favoriteList,
      blackList: blackList,
    });
  }, [getFirstData]);
  return (
    <>
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
      <Spinner isLoading={isLoadingModal}></Spinner>
    </>
  );
};
Main.propTypes = {
  sideMenuIsOpen: PropTypes.bool.isRequired,
  alert: PropTypes.string,
  isError: PropTypes.bool,
  hideAlert: PropTypes.func.isRequired,
  isLoadingModal: PropTypes.bool.isRequired,
  getFirstData: PropTypes.func.isRequired,
};
Main.defaultProps = {
  alert: null,
  isError: null,
};
export default Main;
