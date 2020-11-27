import { movieTitlesSelector } from 'selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  movieTitles: movieTitlesSelector,
});
