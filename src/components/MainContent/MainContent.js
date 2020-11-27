import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Typography, Row, Col, Checkbox } from 'antd';
import styles from './MainContent.styles';

const { Text } = Typography;

const MainContent = (props) => {
  const { getAllTitles } = props;
  const onFinishSearchForm = (values) => {
    console.log(values);
    let type;
    const { search, movies, series, episodes } = values;
    if (movies) type = 'movie';
    else if (series) type = 'series';
    else if (episodes) type = 'episode';
    else type = '';
    console.log(type);
    getAllTitles({ search, type });
  };

  return (
    <Row justify='center'>
      <Col span={15}>
        <Form
          css={styles.form}
          layout='horizontal'
          name='searchForm'
          initialValues={{
            movies: false,
            series: false,
            episodes: false,
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
            <Form.Item name='movies' valuePropName='checked'>
              <Checkbox>Movies</Checkbox>
            </Form.Item>
            <Form.Item name='series' valuePropName='checked'>
              <Checkbox>Series</Checkbox>
            </Form.Item>
            <Form.Item name='episodes' valuePropName='checked'>
              <Checkbox>Episodes</Checkbox>
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
  );
};

MainContent.propTypes = {
  getAllTitles: PropTypes.func,
};

export default MainContent;
