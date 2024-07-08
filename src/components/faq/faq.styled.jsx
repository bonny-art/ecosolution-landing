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

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 50%;
    order: 2;
    align-self: flex-start;
    flex-grow: 1;
  }
`;

export const Accordion = styled.div`
  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 50%;
    order: 1;
    align-self: stretch;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 50%;
    order: 3;
    align-self: flex-end;
  }
`;
