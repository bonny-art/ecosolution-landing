import React from 'react';
import icons from '../../../assets/sprite.svg';
import * as Styled from './div-with-dot.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

export const DivWithDot = ({ children, goTo }) => {
  const appStore = useAppStore();
  const { isDesktop, setActiveSection } = appStore;

  const handleClick = section => () => {
    setActiveSection(section);

    const offset = isDesktop ? -120 : -145;

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };

  return (
    <Styled.GetInTouch
      to={goTo}
      smooth={true}
      duration={500}
      onClick={handleClick(goTo)}
    >
      {children}
      <span>
        <Styled.Icon>
          <use href={`${icons}#arrow-down`} />
        </Styled.Icon>
      </span>
    </Styled.GetInTouch>
  );
};
