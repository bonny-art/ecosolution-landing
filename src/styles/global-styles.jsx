import { css } from '@emotion/react';
import { theme } from 'styles/theme';

import FiraSansLight from '../fonts/fira-sans-light.ttf';
import FiraSansRegular from '../fonts/fira-sans-regular.ttf';
import OswaldRegular from '../fonts/oswald-regular.ttf';
import OswaldBold from '../fonts/oswald-bold.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Fira Sans';
    font-weight: 300;
    font-style: normal;
    src: url(${FiraSansLight}) format('truetype');
  }
  @font-face {
    font-family: 'Fira Sans';
    font-weight: 400;
    font-style: normal;
    src: url(${FiraSansRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Oswald';
    font-weight: 400;
    font-style: normal;
    src: url(${OswaldRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Oswald';
    font-weight: 700;
    font-style: normal;
    src: url(${OswaldBold}) format('truetype');
  }

  * {
    margin: 0;
  }

  body {
    background-color: ${theme.colors.white};
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.04em;
    font-style: normal;
    color: ${theme.colors.black};

    width: 100%;
    height: 100%;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    line-height: 1;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
