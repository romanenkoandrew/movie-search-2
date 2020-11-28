import TableContainer from './TableContainer';
import {
  getAllTitles,
  currentPageIncrement,
  currentPageDecrement,
} from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  getAllTitles,
  currentPageIncrement,
  currentPageDecrement,
};

export default connect(selector, mapDispatchToProps)(TableContainer);
