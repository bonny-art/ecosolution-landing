import styled from '@emotion/styled';

export const GetInTouch = styled.div`
  border-radius: 500px;
  height: 39px;
  padding: 10px 16px;

  display: inline-flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.green};

  color: ${({ theme }) => theme.colors.black};

  line-height: 19px;

  transition:
    color ${({ theme }) => theme.animation.transition},
    background-color ${({ theme }) => theme.animation.transition};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};

    span {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  span {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color ${({ theme }) => theme.animation.transition};
  }
`;

export const Icon = styled.svg`
  width: 8px;
  height: 9px;

  stroke: ${({ theme }) => theme.colors.black};
`;
