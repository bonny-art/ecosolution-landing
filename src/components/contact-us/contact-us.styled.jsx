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
  gap: 24px;
  align-items: center;

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    max-width: 440px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;

    gap: 40px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;

    gap: 120px;
  }
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    font-size: 36px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    font-size: 48px;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  flex-shrink: 0;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
    letter-spacing: -0.04em;
    text-transform: none;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 255px;
    gap: 32px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 516px;
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  a,
  button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;

    font-family: 'Fira Sans', sans-serif;
    font-size: 20px;
    text-align: left;

    transition: color ${({ theme }) => theme.transitionDuration};

    &:hover,
    :focus {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.black};
    width: auto;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    gap: 16px;

    a,
    button {
      font-size: 24px;
    }
  }
`;

export const SocialsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    gap: 16px;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 32px;

  padding: 12px;

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    gap: 8px;

    padding: 0;
  }
`;

export const FormBlock = styled.div`
  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 342px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 596px;
  }
`;
