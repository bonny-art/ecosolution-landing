import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 36px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 25px;

  padding: 24px;

  backdrop-filter: blur(25px);
  background: ${({ theme }) => theme.colors.black}bf;

  z-index: 2;

  @media (${({ theme }) => theme.mediaQueries.maxMobile}) {
    left: 50%;
    transform: translate(-50%, 0%);

    width: calc(100% - 40px);
    max-width: 440px;
    height: calc(100% - 56px);
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    right: calc((100% - 708px) / 2);

    width: 320px;
    height: calc(100% - 66px);
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    top: 24px;
    right: calc((100% - 1240px) / 2);

    width: 365px;
    height: calc(100% - 48px);
  }
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 8px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background-color: transparent;

  cursor: pointer;
  z-index: 2;

  font-size: 20px;

  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 20px;
    height: 20px;

    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const MainContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;

    stroke: ${({ theme }) => theme.colors.white};
  }
`;
