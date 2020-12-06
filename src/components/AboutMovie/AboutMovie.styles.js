import { css } from '@emotion/core';

export default {
  poster: (image) => css`
    height: 27rem;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${image});
  `,
  sizeH1: () => css`
    font-size: 1.5rem;
  `,
  divider: () => css`
    margin: 0;
  `,
};
