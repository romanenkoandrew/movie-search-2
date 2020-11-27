import {
  sideMenuIsOpenSelector,
  alertSelector,
  isErrorSelector,
} from 'selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  sideMenuIsOpen: sideMenuIsOpenSelector,
  alert: alertSelector,
  isError: isErrorSelector,
});
