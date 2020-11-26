import SideMenu from './SideMenu';
import { connect } from 'react-redux';
import selector from './selector';
import { toggleSideMenu } from 'actions';

const mapDispatchToProps = { toggleSideMenu };

export default connect(selector, mapDispatchToProps)(SideMenu);
