import React from 'react';
import SideMenu from 'components/SideMenu';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import MainContent from 'components/WatchList';
import styles from './Main.styles';

const { Text, Link, Title } = Typography;

const { Header, Content, Footer } = Layout;

const Main = (props) => {
  const { sideMenuIsOpen } = props;
  return (
    <Layout css={styles.layoutContainer}>
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
export default Main;
