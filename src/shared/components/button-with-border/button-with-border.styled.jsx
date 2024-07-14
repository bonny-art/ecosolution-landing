import styled from '@emotion/styled';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 500px;
  padding: 4px 4px 4px 16px;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  color: ${({ theme }) => theme.colors.black};

  line-height: 19px;

  transition:
    color ${({ theme }) => theme.animation.transition},
    border-color ${({ theme }) => theme.animation.transition},
    background-color ${({ theme }) => theme.animation.transition};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.black};
  }

  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.green};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.colors.black};
`;
