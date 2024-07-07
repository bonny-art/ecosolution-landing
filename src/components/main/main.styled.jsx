import styled from '@emotion/styled';
import { Element } from 'react-scroll';

export const Section = styled(Element)`
  width: 100%;
  padding: 216px 0 36px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    padding: 240px 0 100px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding: 264px 0 120px;
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
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  h1 {
    line-height: 1;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.04em;
    text-align: justify;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      width: 290px;

      font-size: 48px;
    }

    div {
      width: 342px;
      align-items: start;
      gap: 43px;
    }

    p {
      text-align: left;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      width: 485px;

      font-size: 64px;
    }

    div {
      width: 459px;
      align-items: start;
      gap: 20px;
    }

    p {
      width: 363px;
    }
  }
`;

export const ContactsBlock = styled.div`
  margin-bottom: 36px;

  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.green};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 16px;
    margin-bottom: 40px;

    div {
      display: flex;
      flex-direction: row;
      gap: 77px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding-top: 12px;
    margin-bottom: 36px;

    div {
      display: flex;
      flex-direction: row;
      gap: 492px;
    }
  }
`;

export const ImgBlock = styled.div``;
