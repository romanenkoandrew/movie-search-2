import { css } from '@emotion/core';
import { BREAKPOINTS } from 'constants/breakpoints';

export default {
  poster: (image) => css`
    height: 27rem;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${image});
    @media (max-width: ${BREAKPOINTS.md}) {
      background-position-x: center;
    }
  `,
  width100: () => css`
    @media (max-width: ${BREAKPOINTS.sm}) {
      width: 100%;
    }
  `,
  rating: () => css`
    @media (max-width: ${BREAKPOINTS.sm}) {
      .ant-rate-star:not(:last-child) {
        margin-right: 5px;
      }
    }
  `,
  directionColumn: () => css`
    @media (max-width: ${BREAKPOINTS.sm}) {
      flex-direction: column;
    }
  `,
  textCenter: () => css`
    @media (max-width: ${BREAKPOINTS.md}) {
      text-align: center;
    }
  `,
  sizeH1: () => css`
    font-size: 1.5rem;
  `,
  divider: () => css`
    margin: 0;
  `,
};
