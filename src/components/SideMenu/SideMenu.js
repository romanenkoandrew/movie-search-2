import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Layout } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  StarOutlined,
  RestOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './SideMenu.styles';
import {
  MAIN_ROUTE,
  WATCHLIST_ROUTE,
  VIEWED_ROUTE,
  FAVORITE_ROUTE,
  BLACK_LIST_ROUTE,
} from 'constants/routing';

const { Sider } = Layout;

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Sider
      css={styles.sider}
      theme='dark'
      collapsible
      collapsed={isMenuOpen}
      onCollapse={toggleMenu}
    >
      <Menu mode='inline' theme='dark' css={styles.menu}>
        <Menu.Item key={MAIN_ROUTE} icon={<HomeOutlined />}>
          <Link to={MAIN_ROUTE}>Main</Link>
        </Menu.Item>
        <Menu.Item key={WATCHLIST_ROUTE} icon={<ProfileOutlined />}>
          <Link to={WATCHLIST_ROUTE}>WatchList</Link>
        </Menu.Item>
        <Menu.Item key={VIEWED_ROUTE} icon={<PlaySquareOutlined />}>
          <Link to={VIEWED_ROUTE}>Viewed</Link>
        </Menu.Item>
        <Menu.Item key={FAVORITE_ROUTE} icon={<StarOutlined />}>
          <Link to={FAVORITE_ROUTE}>Favorite</Link>
        </Menu.Item>
        <Menu.Item key={BLACK_LIST_ROUTE} icon={<RestOutlined />}>
          <Link to={BLACK_LIST_ROUTE}>Black List</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {};

export default SideMenu;
