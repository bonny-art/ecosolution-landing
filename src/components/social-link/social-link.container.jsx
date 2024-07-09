import React from 'react';

import icons from '../../assets/sprite.svg';
import * as Styled from './social-link.styled';

export const SocialLink = ({ href, icon, label, isDark }) => (
  <Styled.SocialButton
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    isDark={isDark}
  >
    <svg>
      <use href={`${icons}#${icon}`} />
    </svg>
  </Styled.SocialButton>
);
