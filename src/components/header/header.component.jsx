import React, { useState } from 'react';
import icons from '../../assets/sprite.svg';
import * as Styled from './header.styled';
import { useAppStore } from 'store/store';
import { ButtonWithDot } from 'shared/components/button-with-dot.component';
import { Modal } from 'shared/modal/modal.component';
import { BurgerMenu } from 'components/burger-menu/burger-menu.component';

export const Header = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop } = appStore;
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <Styled.Header>
        <Styled.Section
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.Logo>
            <use href={`${icons}#logo`} />
          </Styled.Logo>

          <Styled.MenuBlock>
            <Styled.MenuButton onClick={openModal}>
              <Styled.MenuIcon>
                <use href={`${icons}#menu`} />
              </Styled.MenuIcon>
            </Styled.MenuButton>

            {!isMobile && (
              <ButtonWithDot goTo="contact-us" width="140px">
                Get in touch
              </ButtonWithDot>
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
