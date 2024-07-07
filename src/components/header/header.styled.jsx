import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 36px 0;

  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.animation.transition};

  &.scrolled {
    background-color: ${({ theme }) => theme.colors.offWhite};
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding: 24px 0 24px;
  }
`;

export const Section = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
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
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: end;

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

export const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuButton = styled.button`
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 39px;

  background-color: ${({ theme }) => theme.colors.greenLight};
  transition: background-color ${({ theme }) => theme.animation.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const MenuIcon = styled.svg`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.colors.black};
`;
