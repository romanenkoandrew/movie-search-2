import MainContent from './MainContent';
import { connect } from 'react-redux';
import selector from './selector';
import { getAllTitles } from 'actions';

const mapDispatchToProps = { getAllTitles };

export default connect(selector, mapDispatchToProps)(MainContent);
