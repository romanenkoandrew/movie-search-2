import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Layout } from 'antd';
import {
  HomeFilled,
  ProfileFilled,
  StarFilled,
  PlaySquareFilled,
  RestFilled,
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

const SideMenu = (props) => {
  const { toggleSideMenu, sideMenuIsOpen } = props;
  const toggleMenu = () => {
    toggleSideMenu({ sideMenuIsOpen: !sideMenuIsOpen });
  };
  return (
    <Sider
      css={styles.sider}
      theme='dark'
      collapsible
      collapsed={sideMenuIsOpen}
      onCollapse={toggleMenu}
    >
      <Menu mode='inline' theme='dark' css={styles.menu}>
        <Menu.Item
          key={MAIN_ROUTE}
          icon={<HomeFilled style={{ color: 'green' }} />}
        >
          <Link to={MAIN_ROUTE}>Main</Link>
        </Menu.Item>
        <Menu.Item
          key={WATCHLIST_ROUTE}
          icon={<ProfileFilled style={{ color: '#ff9900' }} />}
        >
          <Link to={WATCHLIST_ROUTE}>Watch List</Link>
        </Menu.Item>
        <Menu.Item
          key={VIEWED_ROUTE}
          icon={<PlaySquareFilled style={{ color: 'red' }} />}
        >
          <Link to={VIEWED_ROUTE}>Viewed</Link>
        </Menu.Item>
        <Menu.Item
          key={FAVORITE_ROUTE}
          icon={<StarFilled style={{ color: '#ecec20' }} />}
        >
          <Link to={FAVORITE_ROUTE}>Favorite</Link>
        </Menu.Item>
        <Menu.Item
          key={BLACK_LIST_ROUTE}
          icon={<RestFilled style={{ color: 'white' }} />}
        >
          <Link to={BLACK_LIST_ROUTE}>Black List</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  sideMenuIsOpen: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
