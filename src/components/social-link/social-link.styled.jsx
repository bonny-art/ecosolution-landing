import styled from '@emotion/styled';

export const SocialButton = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  svg {
    width: 24px;
    height: 24px;

    stroke: currentColor;
  }
`;
