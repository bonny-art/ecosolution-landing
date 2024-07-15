import styled from '@emotion/styled';

export const SocialButton = styled.a`
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.black : theme.colors.white};
  transition: color ${({ theme }) => theme.animation.transition};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.green};
  }

  svg {
    width: 24px;
    height: 24px;

    stroke: currentColor;
  }
`;
