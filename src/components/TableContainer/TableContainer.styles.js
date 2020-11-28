import { css } from '@emotion/core';

export default {
  poster: (image) => css`
    height: 5rem;
    width: 5rem;
    background-image: url(${image});
    background-size: cover;
  `,
  table: () => css`
    .ant-table-thead > tr > th,
    .ant-table-cell {
      text-align: center;
    }
  `,
  titleTable: () => css`
    text-align: center;
  `,
  button: () => css`
      width: 7rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
    }
  `,
};
