import MainContent from './MainContent';
import { connect } from 'react-redux';
import selector from './selector';
import { getAllTitles, currentPageReset, showAlert } from 'actions';

const mapDispatchToProps = { getAllTitles, currentPageReset, showAlert };

export default connect(selector, mapDispatchToProps)(MainContent);
