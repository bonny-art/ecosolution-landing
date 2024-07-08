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

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    max-width: 440px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;

    flex-wrap: wrap;
    align-content: space-between;
    height: ${props => props.containerHeight}px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-family: 'Oswald', sans-serif;
  font-size: 28px;

  p {
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 347px;
    order: 2;
    align-self: flex-start;
    flex-grow: 1;

    font-size: 36px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 520px;
    display: flex;
    justify-content: center;

    font-size: 48px;

    p {
      width: 380px;
    }
  }
`;

export const Accordion = styled.div`
  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 342px;
    order: 1;
    align-self: stretch;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 596px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  p {
    font-size: 18px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 347px;
    order: 3;
    align-self: flex-end;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 520px;

    p {
      font-size: 24px;
    }
  }
`;
