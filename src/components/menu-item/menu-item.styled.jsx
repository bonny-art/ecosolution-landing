import styled from '@emotion/styled';

export const MenuItem = styled.li`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  width: fit-content;

  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.offWhite}3f;
  transition: color ${({ theme }) => theme.animation.transition};

  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.green};
  }

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 16px;
    height: 16px;

    stroke: currentColor;
  }
`;
