import Main from './Main';
import {hideAlert} from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {hideAlert};

export default connect(selector, mapDispatchToProps)(Main);
