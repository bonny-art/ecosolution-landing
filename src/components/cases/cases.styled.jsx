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

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 26px;

  h2 {
    width: 264px;

    font-family: 'Oswald', sans-serif;
    font-size: 28px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 38px;

    h2 {
      width: 264px;

      font-size: 36px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    margin-bottom: 120px;

    h2 {
      width: 390px;

      font-size: 48px;
    }
  }
`;

export const ControlsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  p {
    font-weight: 300;
    font-size: 28px;
    line-height: 22px;
    text-align: justify;
  }

  span {
    color: ${({ theme }) => theme.colors.black}3f;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 344px;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -9px;
      bottom: 0;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 459px;

    &::before {
      left: -161px;
    }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 12px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 66px;
    height: 66px;
    border-radius: 50%;

    border: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    transition:
      color ${({ theme }) => theme.animation.transition},
      border-color ${({ theme }) => theme.animation.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Icon = styled.svg`
  width: 36px;
  height: 36px;

  stroke: currentColor;
`;
