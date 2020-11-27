import { movieTitlesSelector, isLoadingSelector } from 'selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  movieTitles: movieTitlesSelector,
  isLoading: isLoadingSelector,
});
