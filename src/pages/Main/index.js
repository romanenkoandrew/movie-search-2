import Main from './Main';
import { hideAlert, getFirstData } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = { hideAlert, getFirstData };

export default connect(selector, mapDispatchToProps)(Main);
