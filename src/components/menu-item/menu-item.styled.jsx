import styled from '@emotion/styled';

export const MenuItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.offWhite}3f;
  transition: color ${({ theme }) => theme.animation.transition};

  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.green};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  svg {
    width: 16px;
    height: 16px;

    stroke: currentColor;
  }
`;
