import { css } from 'styled-components';

import mediaQuery from './mediaQuery';

export const headings = {
  xlarge: (weight = 700) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 26px;
    line-height: 1.4;

    ${mediaQuery.tablet`
      font-size: 38px;
      line-height: 1.4;
    `}
  `,
  xmedium: (weight = 700) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 20px;
    line-height: 1.4;

    ${mediaQuery.tablet`
      font-size: 30px;
      line-height: 1.4;
    `}
  `,
  medium: (weight = 700) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 18px;
    line-height: 1.4;

    ${mediaQuery.tablet`
      font-size: 26px;
      line-height: 1.4;
    `}
  `,
  small: (weight = 700) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 16px;
    line-height: 1.4;
  `,
  xsmall: (weight = 700) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 14px;
    line-height: 1.4;

    ${mediaQuery.tablet`
      font-size: 22px;
    `}
  `,
};

export const body = {
  xlarge: (weight = 400) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 14px;
    line-height: 1.4;

    ${mediaQuery.tablet`
      font-size: 18px;
    `}
  `,
  large: (weight = 400) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 16px;
    line-height: 1.4;
  `,
  medium: (weight = 400) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 14px;
    line-height: 1.4;
  `,
  small: (weight = 400) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 10px;
    line-height: 1.4;
  `,
  xsmall: (weight = 400) => css`
    font-family: 'Montserrat', Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 8px;
    line-height: 1.2;
  `,
};
