import styled from '@emotion/styled';

export const Section = styled.footer`
  width: 100%;
  padding-bottom: 24px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    padding-bottom: 40px;
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

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    max-width: 440px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;

    gap: 16px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding-top: 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.green};

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    padding-top: 40px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 342px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    width: 459px;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: end;
  cursor: pointer;

  & .name {
    transition: fill ${({ theme }) => theme.animation.transition};
  }

  &:hover .name {
    fill: ${({ theme }) => theme.colors.green};
  }
`;

export const Logo = styled.svg`
  width: 31px;
  height: 18px;

  margin-bottom: 8px;
`;

export const Name = styled.svg`
  width: 170px;
  height: 40px;

  fill: ${({ theme }) => theme.colors.black};
`;

export const Slogan = styled.svg`
  width: 60px;
  height: 18px;

  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.green};

  transition:
    color ${({ theme }) => theme.animation.transition},
    background-color ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.green};

    background-color: ${({ theme }) => theme.colors.black};
  }

  & svg {
    width: 24px;
    height: 24px;

    stroke: currentColor;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    align-items: center;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    flex-direction: row;
    justify-content: space-between;

    div {
      flex-direction: row;
      justify-content: space-between;

      width: 342px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    div {
      width: 459px;
    }
  }
`;
