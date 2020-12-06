import {
  sideMenuIsOpenSelector,
  alertSelector,
  isErrorSelector,
} from 'selectors';
import { isLoadingSelector } from 'selectors/modalWindow';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  sideMenuIsOpen: sideMenuIsOpenSelector,
  alert: alertSelector,
  isError: isErrorSelector,
  isLoadingModal: isLoadingSelector,
});
