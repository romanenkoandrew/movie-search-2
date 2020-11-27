import { css } from '@emotion/core';

export default {
  poster: (image) => css`
    height: 5rem;
    width: 5rem;
    background-image: url(${image});
    background-size: cover;
  `,
  table: () => css`
    .ant-table-thead > tr > th {
      text-align: center;
    }
  `,
};
