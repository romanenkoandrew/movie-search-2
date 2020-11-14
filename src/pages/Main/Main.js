import React from 'react';
import SideMenu from 'components/SideMenu';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Main.styles';
import { Typography } from 'antd';

const { Text, Link, Title } = Typography;

const { Header, Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout css={styles.layoutContainer}>
      <SideMenu />
      <Layout>
        <Header css={styles.header}>
          <Title>Movie Search v.2.0</Title>
        </Header>
        <Content css={styles.content}>Content</Content>
        <Footer css={styles.footer}>
          <Text css={styles.textSecondary}>2020</Text>
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
