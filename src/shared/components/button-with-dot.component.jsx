import React from 'react';

import * as Styled from './button-with-dot.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

export const ButtonWithDot = ({ children, goTo, width }) => {
  const appStore = useAppStore();
  const { setActiveSection } = appStore;

  const handleClick = section => () => {
    setActiveSection(section);

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      // offset: -50,
    });
  };

  return (
    <Styled.GetInTouch
      to={goTo}
      smooth={true}
      duration={500}
      width={width}
      onClick={handleClick(goTo)}
    >
      {children} <span></span>
    </Styled.GetInTouch>
  );
};
