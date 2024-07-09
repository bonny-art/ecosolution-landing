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
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
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

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Fira Sans', sans-serif;
    font-size: 20px;

    transition: color ${({ theme }) => theme.transitionDuration};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    text-align: left;
    font-family: 'Fira Sans', sans-serif;
    font-size: 20px;

    transition: color ${({ theme }) => theme.transitionDuration};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SocialsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 8px;

  div {
    padding: 12px;
  }
`;

export const FormBox = styled.div``;
