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

    flex-direction: row;
    justify-content: space-between;
    height: 697px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;

    height: 525px;
  }
`;

export const Sidebar = styled.div`
  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 347px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 520px;
  }
`;

export const Title = styled.div`
  margin-bottom: 24px;

  h2 {
    width: 300px;

    font-family: 'Oswald', sans-serif;
    font-size: 28px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    h2 {
      font-size: 36px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    display: flex;
    justify-content: center;

    h2 {
      width: 350px;

      font-size: 48px;
    }
  }
`;

export const Accordion = styled.div`
  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 342px;
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
