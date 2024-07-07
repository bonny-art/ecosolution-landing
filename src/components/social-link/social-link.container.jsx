import React from 'react';

import icons from '../../assets/sprite.svg';
import * as Styled from './social-link.styled';

export const SocialLink = ({ href, icon, label }) => (
  <Styled.SocialButton
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <svg>
      <use href={`${icons}#${icon}`} />
    </svg>
  </Styled.SocialButton>
);
