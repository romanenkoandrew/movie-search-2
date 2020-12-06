import TableContainer from './TableContainer';
import {
  getAllTitles,
  getTitleByID,
  currentPageIncrement,
  currentPageDecrement,
  toggleModal,
} from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  getAllTitles,
  getTitleByID,
  currentPageIncrement,
  currentPageDecrement,
  toggleModal,
};

export default connect(selector, mapDispatchToProps)(TableContainer);
