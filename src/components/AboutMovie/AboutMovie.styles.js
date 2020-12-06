import { css } from '@emotion/core';

export default {
  alert: () => css`
    position: absolute;
    width: 300px;
    left: 50%;
    top: 7%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
  `,
};
