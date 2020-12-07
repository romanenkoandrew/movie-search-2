import React from 'react';
import { NO_IMAGE_URL } from 'constants/url';
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
import AboutMovie from 'components/AboutMovie/AboutMovie';
import {
  WATCHLIST_ROUTE,
  VIEWED_ROUTE,
  FAVORITE_ROUTE,
  BLACK_LIST_ROUTE,
  WATCH_LIST,
  VIEWED_LIST,
  FAVORITE_LIST,
  BLACK_LIST,
} from 'constants/routing';
import { findItemLS, getFromLS, toggleItemInLS } from 'helpers/localStorage';

const { Title } = Typography;

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
    getTitleByID,
    currentPageIncrement,
    currentPageDecrement,
    currentPage,
    totalResults,
    toggleModal,
    aboutMovie,
    isOpenModal,
    upgradeWatchList,
    upgradeViewedList,
    upgradeFavoriteList,
    upgradeBlackList,
  } = props;
  const { pathname } = useLocation();
  const columns = [
    {
      title: 'Poster',
      dataIndex: 'Poster',
      key: 'Poster',
      width: 100,
      render: (dataIndex) => {
        if (dataIndex === 'N/A')
          return <div css={styles.poster(NO_IMAGE_URL)}></div>;
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
      render: (record) => (
        <Space size='small'>
          <Tooltip
            title={
              findItemLS(WATCH_LIST, record)
                ? 'Remove from watch list'
                : 'Add to watch list'
            }
          >
            <Button
              size='small'
              shape='circle'
              icon={
                findItemLS(WATCH_LIST, record) ? (
                  <ProfileFilled style={{ color: '#ff9900' }} />
                ) : (
                  <ProfileOutlined />
                )
              }
              onClick={() => toggleWatchListHandler(WATCH_LIST, record)}
            />
          </Tooltip>
          <Tooltip
            title={
              findItemLS(VIEWED_LIST, record)
                ? 'Remove from viewed list'
                : 'Add to viewed list'
            }
          >
            <Button
              size='small'
              shape='circle'
              icon={
                findItemLS(VIEWED_LIST, record) ? (
                  <PlaySquareFilled style={{ color: 'red' }} />
                ) : (
                  <PlaySquareOutlined />
                )
              }
              onClick={() => toggleWatchListHandler(VIEWED_LIST, record)}
            />
          </Tooltip>
          <Tooltip
            title={
              findItemLS(FAVORITE_LIST, record)
                ? 'Remove from favorite list'
                : 'Add to favorite list'
            }
          >
            <Button
              size='small'
              shape='circle'
              icon={
                findItemLS(FAVORITE_LIST, record) ? (
                  <StarFilled style={{ color: '#ecec20' }} />
                ) : (
                  <StarOutlined />
                )
              }
              onClick={() => toggleWatchListHandler(FAVORITE_LIST, record)}
            />
          </Tooltip>
          <Tooltip
            title={
              findItemLS(BLACK_LIST, record)
                ? 'Remove from black list'
                : 'Add to black list'
            }
          >
            <Button
              size='small'
              shape='circle'
              icon={
                findItemLS(BLACK_LIST, record) ? (
                  <RestFilled />
                ) : (
                  <RestOutlined />
                )
              }
              onClick={() => toggleWatchListHandler(BLACK_LIST, record)}
            />
          </Tooltip>
          <Tooltip title='Delete'>
            <Button size='small' shape='circle' icon={<DeleteOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  const dataForTable = () => {
    switch (pathname) {
      case WATCHLIST_ROUTE: {
        return watchList;
      }
      case VIEWED_ROUTE: {
        return viewed;
      }
      case FAVORITE_ROUTE: {
        return favorite;
      }
      case BLACK_LIST_ROUTE: {
        return blackList;
      }
      default: {
        return movieTitles;
      }
    }
  };
  const titleTable = () => {
    switch (pathname) {
      case WATCHLIST_ROUTE: {
        return 'Watch List';
      }
      case VIEWED_ROUTE: {
        return 'Viewed List';
      }
      case FAVORITE_ROUTE: {
        return 'Favorite List';
      }
      case BLACK_LIST_ROUTE: {
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

  const getMoreAboutMovie = (record) => {
    getTitleByID({ id: record.imdbID });
  };

  const toggleWatchListHandler = (arrName, record) => {
    toggleItemInLS(arrName, record);
    const newList = getFromLS(arrName);
    switch (arrName) {
      case WATCH_LIST: {
        upgradeWatchList(newList);
        break;
      }
      case VIEWED_LIST: {
        upgradeViewedList(newList);
        break;
      }
      case FAVORITE_LIST: {
        upgradeFavoriteList(newList);
        break;
      }
      case BLACK_LIST: {
        upgradeBlackList(newList);
        break;
      }
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
              onDoubleClick: () => getMoreAboutMovie(record),
            };
          }}
        />
      );
    } else
      return (
        <>
          <Row justify='end' css={styles.marginBottom}>
            <Button
              css={styles.button}
              onClick={previousPage}
              disabled={currentPage === 1 || isLoading}
            >
              &lt; Previous
            </Button>
            <Button
              css={styles.button}
              onClick={nextPage}
              disabled={
                !search ||
                currentPage > totalResults / numberValuesOnPage ||
                isLoading
              }
            >
              Next &gt;
            </Button>
          </Row>
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
                onDoubleClick: () => getMoreAboutMovie(record),
              };
            }}
          />
        </>
      );
  };

  return (
    <>
      <Title css={styles.titleTable} level={2}>
        {titleTable()}
      </Title>
      {diffTable()}
      <AboutMovie
        toggleModal={toggleModal}
        isOpenModal={isOpenModal}
        aboutMovie={aboutMovie}
      />
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
  getTitleByID: PropTypes.func.isRequired,
  currentPageIncrement: PropTypes.func.isRequired,
  currentPageDecrement: PropTypes.func.isRequired,
  searchBlockValues: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.string.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  aboutMovie: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  upgradeWatchList: PropTypes.func.isRequired,
  upgradeViewedList: PropTypes.func.isRequired,
  upgradeFavoriteList: PropTypes.func.isRequired,
  upgradeBlackList: PropTypes.func.isRequired,
};
