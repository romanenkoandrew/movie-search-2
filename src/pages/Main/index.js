import Main from './Main';
import {} from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {};

export default connect(selector, mapDispatchToProps)(Main);
