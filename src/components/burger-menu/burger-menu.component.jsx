import React from 'react';
import icons from '../../assets/sprite.svg';
import { scroller } from 'react-scroll';
import * as Styled from './burger-menu.styled';
import { useAppStore } from 'store/store';

import { socialLinks } from 'constants/socialLinks';
import { SocialLink } from 'components/social-link/social-link.container';
import { MenuItem } from 'components/menu-item/menu-item.component';

export const BurgerMenu = ({ closeModal }) => {
  const appStore = useAppStore();
  const { isDesktop, activeSection, setActiveSection } = appStore;

  const closeWithScroll = section => () => {
    setActiveSection(section);
    closeModal();

    const offset = isDesktop ? -120 : -145;

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };

  return (
    <Styled.Container>
      <Styled.CloseButtonContainer>
        <Styled.CloseButton onClick={closeModal}>
          <svg>
            <use href={`${icons}#close`} />
          </svg>
          close
        </Styled.CloseButton>
      </Styled.CloseButtonContainer>

      <Styled.MainContainer>
        <nav>
          <ul>
            {['main', 'about', 'cases', 'faq', 'contact-us'].map(section => (
              <MenuItem
                key={section}
                section={section}
                activeSection={activeSection}
                closeWithScroll={closeWithScroll}
              />
            ))}
          </ul>
        </nav>

        <Styled.SocialsContainer>
          {socialLinks.map(({ id, href, icon }) => (
            <SocialLink key={id} href={href} icon={icon} label={id} />
          ))}
        </Styled.SocialsContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};
