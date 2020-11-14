import { css } from '@emotion/core';
import { COLORS } from 'constants/colors';

export default {
  layoutContainer: () => css`
    min-height: 100vh;
  `,
  header: () => css`
    h1 {
      color: ${COLORS.SECONDARY_TEXT_COLOR};
      margin-bottom: 0;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  `,
  content: () => css`
    background-color: ${COLORS.MAIN_BACKGROUND};
    padding: 0.5rem;
  `,
  footer: () => css`
    background-color: ${COLORS.SECONDARY_BACKGROUND};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      margin-right: 0.5rem;
    }
    a {
      color: ${COLORS.SECONDARY_TEXT_COLOR};
      &:hover {
        color: #fff;
      }
    }
  `,
  textSecondary: () => css`
    color: ${COLORS.SECONDARY_TEXT_COLOR};
  `,
};
