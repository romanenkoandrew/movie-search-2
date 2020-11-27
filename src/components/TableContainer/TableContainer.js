import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileOutlined,
  ProfileFilled,
  StarOutlined,
  StarFilled,
  PlaySquareOutlined,
  PlaySquareFilled,
  RestOutlined,
  RestFilled,
  DeleteOutlined,
} from '@ant-design/icons';
import { Typography, Table, Space, Tooltip, Button } from 'antd';
import styles from './TableContainer.styles';

const { Text, Link, Title } = Typography;

const columns = [
  {
    title: 'Poster',
    dataIndex: 'Poster',
    key: 'Poster',
    width: 100,
    render: (dataIndex) => {
      return <div css={styles.poster(dataIndex)}></div>;
    },
  },
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
  },
  {
    title: 'Year',
    dataIndex: 'Year',
    key: 'Year',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Space size='small'>
        <Tooltip title='Add to watch list'>
          <Button size='small' shape='circle' icon={<ProfileOutlined />} />
        </Tooltip>
        <Tooltip title='Add to viewed'>
          <Button size='small' shape='circle' icon={<PlaySquareOutlined />} />
        </Tooltip>
        <Tooltip title='Add to favorite'>
          <Button size='small' shape='circle' icon={<StarOutlined />} />
        </Tooltip>
        <Tooltip title='Add to black list'>
          <Button size='small' shape='circle' icon={<RestOutlined />} />
        </Tooltip>
        <Tooltip title='Delete'>
          <Button size='small' shape='circle' icon={<DeleteOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
];
const TableContainer = (props) => {
  const { movieTitles, isLoading } = props;
  return (
    <Table
      css={styles.table}
      bordered
      columns={columns}
      dataSource={movieTitles}
      scroll={{ x: true }}
      loading={isLoading}
    />
  );
};
export default TableContainer;

TableContainer.propTypes = {
  movieTitles: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
