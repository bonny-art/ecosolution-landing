import styled from '@emotion/styled';

export const MenuItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.green};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  svg {
    width: 16px;
    height: 16px;

    /* stroke: ${({ theme }) => theme.colors.white}; */
    stroke: currentColor;
  }
`;
