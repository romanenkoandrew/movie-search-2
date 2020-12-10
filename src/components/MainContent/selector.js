import { sideMenuIsOpenSelector } from 'selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  sideMenuIsOpen: sideMenuIsOpenSelector,
});
