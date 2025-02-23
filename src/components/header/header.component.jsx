import React, { useEffect, useState } from 'react';
import icons from '../../assets/sprite.svg';
import * as Styled from './header.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

import { Modal } from 'shared/modal/modal.component';
import { BurgerMenu } from 'components/burger-menu/burger-menu.component';

import { DivWithDot } from 'shared/components/div-with-dot/div-with-dot.component';

export const Header = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = section => () => {
    setActiveSection(section);

    const offset = isDesktop ? -120 : -145;

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };

  return (
    <>
      <Styled.Header className={isScrolled ? 'scrolled' : ''}>
        <Styled.Section
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.LogoGroup
            onClick={scrollTo('main')}
            aria-label="Ecosolution logo"
          >
            <Styled.Logo>
              <use href={`${icons}#logo`} />
            </Styled.Logo>
            <Styled.Name className="name">
              <use href={`${icons}#name`} />
            </Styled.Name>
            <Styled.Slogan>
              <use href={`${icons}#slogan`} />
            </Styled.Slogan>
          </Styled.LogoGroup>

          <Styled.MenuBlock>
            <Styled.MenuButton
              type="button"
              aria-label="Open menu"
              onClick={openModal}
            >
              <Styled.MenuIcon>
                <use href={`${icons}#menu`} />
              </Styled.MenuIcon>
            </Styled.MenuButton>

            {!isMobile && (
              <DivWithDot goTo="contact-us">Get in touch</DivWithDot>
            )}
          </Styled.MenuBlock>
        </Styled.Section>
      </Styled.Header>

      {isModalOpened && (
        <Modal
          closeModal={closeModal}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <BurgerMenu closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};
