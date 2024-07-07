import React from 'react';

import * as Styled from './menu-item.styled';
import icons from '../../assets/sprite.svg';
import { formatSectionName } from 'utils/format-section-name';

export const MenuItem = ({ section, activeSection, closeWithScroll }) => (
  <Styled.MenuItem
    onClick={closeWithScroll(section)}
    className={activeSection === section ? 'active' : ''}
  >
    {formatSectionName(section)}
    <svg>
      <use href={`${icons}#arrow-up-right`} />
    </svg>
  </Styled.MenuItem>
);
