import { css } from '@emotion/core';
import { COLORS } from 'constants/colors';

export default {
  sider: () => css`
    .ant-layout-sider-trigger {
      background-color: ${COLORS.MAIN_BACKGROUND};
      color: ${COLORS.SECONDARY_BACKGROUND};
      &:hover {
        color: #fff;
        background-color: ${COLORS.SECONDARY_BACKGROUND};
      }
    }
    .ant-menu-item {
      margin-top: 0;
    }
  `,
  menu: () => css`
    padding-top: 4rem;
  `,
};
