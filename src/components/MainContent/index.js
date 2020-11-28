import MainContent from './MainContent';
import { connect } from 'react-redux';
import selector from './selector';
import { getAllTitles, currentPageReset } from 'actions';

const mapDispatchToProps = { getAllTitles, currentPageReset };

export default connect(selector, mapDispatchToProps)(MainContent);
