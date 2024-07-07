import styled from '@emotion/styled';
import { Element } from 'react-scroll';

export const Section = styled(Element)`
  width: 100%;
  padding-bottom: 36px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    padding-bottom: 100px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding-bottom: 120px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    max-width: 440px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 28px;
  }

  p {
    text-align: justify;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    flex-direction: row;
    justify-content: space-between;

    h2 {
      width: 272px;
      font-size: 36px;
    }

    p {
      width: 342px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -11px;
        bottom: 0;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    h2 {
      width: 365px;
      font-size: 48px;
    }

    p {
      width: 459px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -161px;
        bottom: 0;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 24px;

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .div5 {
    grid-area: 2 / 1 / 3 / 2;
  }

  .div6 {
    grid-area: 2 / 2 / 3 / 3;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .div3 {
      grid-area: 1 / 3 / 2 / 5;
      width: 342px;
    }

    .div4 {
      grid-area: 2 / 1 / 3 / 3;
      width: 342px;
    }

    .div5 {
      grid-area: 2 / 3 / 3 / 4;
    }

    .div6 {
      grid-area: 2 / 4 / 3 / 5;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    gap: 48px;

    .div3 {
      width: 596px;
    }

    .div4 {
      width: 596px;
    }
  }
`;

export const GridBlock = styled.div`
  height: 197px;
  padding: 13px 12px 12px;

  background-color: ${({ theme }) => theme.colors.grayLight};

  & .title-block {
    display: flex;
    align-items: center;
    gap: 8px;

    padding-bottom: 33px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.green};
    margin-bottom: 12px;

    h3 {
      font-family: 'Oswald', sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  p {
    font-size: 14px;
    text-align: justify;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 159px;
    padding: 12px;

    & .title-block {
      padding-bottom: 51px;

      h3 {
        font-family: 'Oswald', sans-serif;
        font-size: 18px;
        line-height: 1.33333;
      }
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 274px;
    height: 339px;
    padding: 48px 24px;

    & .title-block {
      padding-bottom: 94px;
      margin-bottom: 24px;

      h3 {
        font-family: 'Oswald', sans-serif;
        font-size: 32px;
        line-height: 1.5;
      }
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.colors.black};

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 24px;
    height: 24px;
  }
`;
