import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Layout } from 'antd';
import { CarOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './SideMenu.styles';
import { MAIN_ROUTE, WATCHLIST_ROUTE } from 'constants/routing';

const { Sider } = Layout;

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Sider
      css={styles.sider}
      theme='light'
      collapsible
      collapsed={isMenuOpen}
      onCollapse={toggleMenu}
    >
      <Menu mode='inline' theme='light' css={styles.menuItem}>
        <Menu.Item key='main_drivers' icon={<CarOutlined />}>
          <Link to={MAIN_ROUTE}>Main</Link>
        </Menu.Item>
        <Menu.Item key='main_orders' icon={<ProfileOutlined />}>
          <Link to={WATCHLIST_ROUTE}>WatchList</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {};

export default SideMenu;
