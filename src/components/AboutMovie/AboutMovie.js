import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Collapse,
  Divider,
  Modal,
  Rate,
  Row,
  Space,
  Typography,
} from 'antd';
import styles from './AboutMovie.styles';
import { NO_IMAGE_URL } from 'constants/url';

const { Text, Link } = Typography;
const { Panel } = Collapse;

const AboutMovie = ({ isOpenModal, toggleModal, aboutMovie }) => {
  const closeModal = () => {
    toggleModal({ isOpenModal: !isOpenModal });
  };
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    Production,
  } = aboutMovie;
  const infoAboutMovieArray = [
    ['Year', Year],
    ['Type', Type],
    ['Country', Country],
    ['Genre', Genre],
    ['Production', Production],
    ['Director', Director],
    ['Writers', Writer],
    ['Actors', Actors],
    ['Released', Released],
    ['Awards', Awards],
    ['Language', Language],
    ['Runtime', Runtime],
  ];
  const infoAboutMovie = (arr) => {
    return arr.map((el) => {
      return (
        el[1] && (
          <React.Fragment key={el[0]}>
            <Row gutter={[24, 8]}>
              <Col span={4}>
                <Text strong>{el[0]}:</Text>
              </Col>
              <Col span={20}>
                <Text>{el[1]}</Text>
              </Col>
            </Row>
            <Divider css={styles.divider} />
          </React.Fragment>
        )
      );
    });
  };
  const poster = (val) => {
    if (val === 'N/A') return <div css={styles.poster(NO_IMAGE_URL)}></div>;
    return <div css={styles.poster(val)}></div>;
  };
  const moreRatings = (arr) => {
    return arr.map((el) => {
      return (
        <Col span={8} key={el.Source}>
          <Text strong>
            {el.Source}: {el.Value}
          </Text>
        </Col>
      );
    });
  };

  return (
    <Modal
      title='About movie'
      width={1000}
      centered
      footer={null}
      visible={isOpenModal}
      onCancel={closeModal}
    >
      <Row gutter={[16, 8]}>
        <Col span={8}>{poster(Poster)}</Col>
        <Col span={16}>
          {Title && (
            <Link
              href={`https://www.imdb.com/title/${imdbID}`}
              target='_blank'
              css={styles.sizeH1}
              strong
            >
              {Title}
            </Link>
          )}
          {infoAboutMovie(infoAboutMovieArray)}
          {Plot && (
            <Row gutter={[16, 8]} align='middle'>
              <Col span={4}>
                <Text strong>Description:</Text>
              </Col>
              <Col span={20}>
                <Text>{Plot}</Text>
              </Col>
            </Row>
          )}
          <Row align='middle' gutter={[16, 8]}>
            <Col span={4}>
              <Text strong>Rating IMDb:</Text>
            </Col>
            <Col span={20}>
              <Space size='middle'>
                <Rate
                  count={10}
                  disabled
                  allowHalf
                  value={imdbRating !== 'N/A' ? imdbRating : 0}
                />
                <Text
                  css={styles.sizeH1}
                  strong
                  type={imdbRating > 5 ? 'success' : 'danger'}
                >
                  {imdbRating !== 'N/A' ? imdbRating : 'No rating'}
                </Text>
                <Text type='secondary'>
                  {imdbVotes !== 'N/A' ? imdbVotes : 'No'} votes
                </Text>
              </Space>
            </Col>
          </Row>
          {Ratings && (
            <Row>
              <Collapse ghost>
                <Panel header='More ratings' key='1'>
                  <Row>{moreRatings(Ratings)}</Row>
                </Panel>
              </Collapse>
            </Row>
          )}
        </Col>
      </Row>
    </Modal>
  );
};

AboutMovie.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  aboutMovie: PropTypes.object.isRequired,
};
export default AboutMovie;
