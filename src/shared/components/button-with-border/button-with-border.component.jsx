import React from 'react';
import icons from '../../../assets/sprite.svg';
import * as Styled from './button-with-border.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

export const ButtonWithBorder = ({ children, goTo, type = 'button' }) => {
  const appStore = useAppStore();
  const { isDesktop, setActiveSection } = appStore;

  const goToSection = section => {
    setActiveSection(section);

    const offset = isDesktop ? -120 : -145;

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };

  const handleClick = section => () => {
    goToSection(section);
  };

  return (
    <Styled.Button
      type={type}
      to={goTo}
      smooth={true}
      duration={500}
      onClick={goTo ? handleClick(goTo) : null}
    >
      {children}
      <span>
        <Styled.Icon>
          <use href={`${icons}#arrow-right`} />
        </Styled.Icon>
      </span>
    </Styled.Button>
  );
};
