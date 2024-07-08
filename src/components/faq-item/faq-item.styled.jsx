import styled from '@emotion/styled';

export const Item = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.green};
  padding: 17px 0;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    &:last-child {
      padding-bottom: 0;
    }
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding-top: 25px;
  }
`;

export const Question = styled.button`
  display: flex;
  gap: 8px;

  font-size: 18px;
  text-align: justify;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    gap: 16px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    gap: 24px;
  }
`;

export const Icon = styled.svg`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  stroke: ${({ isOpen }) =>
    isOpen
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.green};

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    width: 28px;
    height: 28px;
  }
`;

export const Collapse = styled.div`
  height: 0;
  overflow: hidden;
  transition: height ${({ theme }) => theme.animation.transition};

  height: ${props => (props.isOpen ? `${props.height}px` : 0)};
`;

export const Answer = styled.div`
  padding-top: 16px;
  padding-left: 24px;

  font-size: 14px;
  text-align: justify;

  @media (${({ theme }) => theme.mediaQueries.minTablet}) {
    padding-left: 44px;
  }

  @media (${({ theme }) => theme.mediaQueries.minDesktop}) {
    padding-left: 52px;
    padding-top: 24px;
  }
`;
