import React from 'react';
import { useLocation } from 'react-router-dom';
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
import { Table, Space, Tooltip, Button, Typography, Row } from 'antd';
import styles from './TableContainer.styles';

const { Title } = Typography;

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
  const {
    movieTitles,
    watchList,
    viewed,
    favorite,
    blackList,
    isLoading,
    searchBlockValues,
    getAllTitles,
    currentPageIncrement,
    currentPageDecrement,
    currentPage,
    totalResults,
  } = props;
  const { pathname } = useLocation();
  const dataForTable = () => {
    switch (pathname) {
      case '/watchlist': {
        return watchList;
      }
      case '/viewed': {
        return viewed;
      }
      case '/favorite': {
        return favorite;
      }
      case '/blacklist': {
        return blackList;
      }
      default: {
        return movieTitles;
      }
    }
  };
  const titleTable = () => {
    switch (pathname) {
      case '/watchlist': {
        return 'Watch List';
      }
      case '/viewed': {
        return 'Viewed';
      }
      case '/favorite': {
        return 'Favorite';
      }
      case '/blacklist': {
        return 'Black List';
      }
      default: {
        return;
      }
    }
  };
  const data = dataForTable();

  const numberValuesOnPage = 10;
  const { search, type } = searchBlockValues;
  const nextPage = () => {
    if (search) {
      currentPageIncrement({ currentPage });
      getAllTitles({ search: search, type: type });
    }
  };
  const previousPage = () => {
    if (search) {
      currentPageDecrement({ currentPage });
      getAllTitles({ search: search, type: type });
    }
  };

  const diffTable = () => {
    if (pathname !== '/') {
      return (
        <Table
          css={styles.table}
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
          loading={isLoading}
          onRow={(record) => {
            return {
              onClick: (event) => console.log(record, event),
              onDoubleClick: () => console.log(record),
            };
          }}
        />
      );
    } else
      return (
        <>
          <Table
            css={styles.table}
            bordered
            columns={columns}
            dataSource={data}
            scroll={{ x: true }}
            loading={isLoading}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: (event) => console.log(record, event),
                onDoubleClick: () => console.log(record),
              };
            }}
          />
          <Row justify='end'>
            <Button
              css={styles.button}
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              &lt; Previous
            </Button>
            <Button
              css={styles.button}
              onClick={nextPage}
              disabled={
                !search || currentPage > totalResults / numberValuesOnPage
              }
            >
              Next &gt;
            </Button>
          </Row>
        </>
      );
  };

  return (
    <>
      <Title css={styles.titleTable} level={2}>
        {titleTable()}
      </Title>
      {diffTable()}
    </>
  );
};
export default TableContainer;

TableContainer.propTypes = {
  movieTitles: PropTypes.array.isRequired,
  watchList: PropTypes.array.isRequired,
  viewed: PropTypes.array.isRequired,
  favorite: PropTypes.array.isRequired,
  blackList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getAllTitles: PropTypes.func.isRequired,
  currentPageIncrement: PropTypes.func.isRequired,
  currentPageDecrement: PropTypes.func.isRequired,
  searchBlockValues: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
};
