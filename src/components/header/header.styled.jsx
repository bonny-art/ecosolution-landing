import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 36px 0 140px;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    padding-bottom: 164px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding: 24px 0 200px;
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

export const Logo = styled.svg`
  width: 269px;
  height: 40px;
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
`;

export const MenuIcon = styled.svg`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.colors.black};
`;
