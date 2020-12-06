import {
  movieTitlesSelector,
  watchListSelector,
  viewedSelector,
  favoriteSelector,
  blackListSelector,
  isLoadingSelector,
  currentPageSelector,
  totalResultsSelector,
} from 'selectors';
import { isOpenModalSelector, aboutMovieSelector } from 'selectors/modalWindow';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  movieTitles: movieTitlesSelector,
  watchList: watchListSelector,
  viewed: viewedSelector,
  favorite: favoriteSelector,
  blackList: blackListSelector,
  isLoading: isLoadingSelector,
  currentPage: currentPageSelector,
  totalResults: totalResultsSelector,
  isOpenModal: isOpenModalSelector,
  aboutMovie: aboutMovieSelector,
});
