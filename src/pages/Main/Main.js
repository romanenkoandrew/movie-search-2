import React from 'react';
import SideMenu from 'components/SideMenu';
import { Layout } from 'antd';
import styles from './Main.styles';

const { Header, Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout css={styles.layoutContainer}>
      <SideMenu />
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default Main;
