import { css } from '@emotion/core';
import { COLORS } from 'constants/colors';
import { BREAKPOINTS } from 'constants/breakpoints';

export default {
  layoutContainer: () => css`
    min-height: 100vh;
  `,
  header: (val) => css`
    h1 {
      color: ${COLORS.SECONDARY_TEXT_COLOR};
      margin-bottom: 0;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: ${BREAKPOINTS.sm}) {
        font-size: 1.5rem;
      }
      @media (max-width: ${BREAKPOINTS.xs}) {
        display: ${val ? 'flex' : 'none'};
      }
    }
    @media (max-width: ${BREAKPOINTS.md}) {
      padding: 0;
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
    @media (max-width: ${BREAKPOINTS.sm}) {
      justify-content: center;
      a {
        &:first-of-type {
          display: none;
        }
      }
    }
  `,
};
