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
  align-items: center;
  gap: 96px;

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    max-width: 440px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;

    gap: 135px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;

    gap: 120px;
  }
`;

export const Title = styled.h2`
  width: 286px;
  position: relative;

  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  text-align: center;

  ::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.green};
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 368px;

    font-size: 36px;

    ::after {
      top: 96px;
      height: 87px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 491px;

    font-size: 48px;

    ::after {
      top: 112px;
      height: 87px;
    }
  }
`;

export const Value = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    color: ${({ theme }) => theme.colors.green};
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    gap: 24px;

    font-size: 36px;

    span {
      font-size: 100px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    font-size: 48px;

    span {
      font-size: 164px;
    }
  }
`;
