import styled from '@emotion/styled';

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.colors.grayLight};

  &:hover {
    button {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Caption = styled.div`
  padding: 24px 12px 12px;

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding: 36px 48px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 87px;

  padding-bottom: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};

  margin-bottom: 12px;

  p {
    width: 210px;

    font-size: 18px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    transition:
      color ${({ theme }) => theme.animation.transition},
      background-color ${({ theme }) => theme.animation.transition};
  }

  svg {
    width: 28px;
    height: 28px;

    stroke: currentColor;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    margin-bottom: 24px;

    height: 88px;

    p {
      width: 230px;

      font-size: 20px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    height: 94px;

    p {
      width: 357px;

      font-size: 24px;
    }
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
  }

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    p {
      font-size: 14px;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    p {
      font-size: 16px;
    }
  }
`;
