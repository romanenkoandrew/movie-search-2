import React from 'react';
import TableContainer from 'components/TableContainer';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Button, Form, Input, Typography, Row, Col, Checkbox } from 'antd';
import styles from './MainContent.styles';

const { Text } = Typography;

const MainContent = (props) => {
  const { getAllTitles, currentPageReset } = props;
  const { pathname } = useLocation();
  const [searchBlockValues, setSearchBlockValues] = React.useState({
    search: '',
    type: '',
  });
  const onFinishSearchForm = (values) => {
    let type;
    const { search, movies, series } = values;
    if (movies) type = 'movie';
    else if (series) type = 'series';
    else type = '';
    currentPageReset();
    setSearchBlockValues({ search: search, type: type });
    getAllTitles({ search, type });
  };

  return (
    <>
      {' '}
      {pathname === '/' && (
        <Row justify='center'>
          <Col span={15}>
            <Form
              css={styles.form}
              layout='horizontal'
              name='searchForm'
              initialValues={{
                movies: false,
                series: false,
              }}
              onFinish={onFinishSearchForm}
            >
              <Form.Item
                name='search'
                rules={[
                  {
                    required: true,
                    message: 'Please input title of the movie!',
                  },
                ]}
              >
                <Input
                  placeholder='Enter the title of the movie'
                  autoComplete='off'
                />
              </Form.Item>

              <Row justify='space-between'>
                <Form.Item dependencies={['series']}>
                  {({ getFieldValue }) => {
                    return getFieldValue('series') ? (
                      <Form.Item name='movies' valuePropName='checked'>
                        <Checkbox disabled>Movies</Checkbox>
                      </Form.Item>
                    ) : (
                      <Form.Item name='movies' valuePropName='checked'>
                        <Checkbox>Movies</Checkbox>
                      </Form.Item>
                    );
                  }}
                </Form.Item>

                <Form.Item dependencies={['movies']}>
                  {({ getFieldValue }) => {
                    return getFieldValue('movies') ? (
                      <Form.Item name='series' valuePropName='checked'>
                        <Checkbox disabled>Series</Checkbox>
                      </Form.Item>
                    ) : (
                      <Form.Item name='series' valuePropName='checked'>
                        <Checkbox>Series</Checkbox>
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Search
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Col>
        </Row>
      )}
      <TableContainer searchBlockValues={searchBlockValues} />
    </>
  );
};

MainContent.propTypes = {
  getAllTitles: PropTypes.func.isRequired,
  currentPageReset: PropTypes.func.isRequired,
};

export default MainContent;
