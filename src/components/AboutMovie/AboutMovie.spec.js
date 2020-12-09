import React from 'react';
import { shallow } from 'enzyme';
import AboutMovie from './AboutMovie';

describe('AboutMovie component', () => {
  it('should render AboutMovie component without aboutMovie object', () => {
    const component = shallow(
      <AboutMovie isOpenModal={false} toggleModal={() => {}} aboutMovie={{}} />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render AboutMovie component with aboutMovie object', () => {
    const aboutMovie = {
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Awards: 'Won 6 Oscars. Another 52 wins & 29 nominations.',
      Country: 'USA',
      Director: 'George Lucas',
      Genre: 'Action, Adventure, Fantasy, Sci-Fi',
      Language: 'English',
      Plot:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Production: 'Lucasfilm Ltd.',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.6/10' },
        { Source: 'Rotten Tomatoes', Value: '92%' },
      ],
      Released: '25 May 1977',
      Response: 'True',
      Runtime: '121 min',
      Title: 'Star Wars: Episode IV - A New Hope',
      Type: 'movie',
      Writer: 'George Lucas',
      Year: '1977',
      imdbID: 'tt0076759',
      imdbRating: '8.6',
      imdbVotes: '1,213,873',
    };
    const component = shallow(
      <AboutMovie
        isOpenModal={false}
        toggleModal={() => {}}
        aboutMovie={aboutMovie}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render AboutMovie component with aboutMovie object', () => {
    const aboutMovie = {
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Awards: 'Won 6 Oscars. Another 52 wins & 29 nominations.',
      Country: 'USA',
      Director: 'George Lucas',
      Genre: 'Action, Adventure, Fantasy, Sci-Fi',
      Language: 'English',
      Plot:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      Poster: 'N/A',
      Production: 'Lucasfilm Ltd.',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.6/10' },
        { Source: 'Rotten Tomatoes', Value: '92%' },
      ],
      Released: '25 May 1977',
      Response: 'True',
      Runtime: '121 min',
      Title: 'Star Wars: Episode IV - A New Hope',
      Type: 'movie',
      Writer: 'George Lucas',
      Year: '1977',
      imdbID: 'tt0076759',
      imdbRating: 'N/A',
      imdbVotes: 'N/A',
    };
    const component = shallow(
      <AboutMovie
        isOpenModal={false}
        toggleModal={() => {}}
        aboutMovie={aboutMovie}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
