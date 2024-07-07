import React from 'react';
import icons from '../../../assets/sprite.svg';
import * as Styled from './button-with-dot.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

export const ButtonWithDot = ({ children, goTo, width, type = 'button' }) => {
  const appStore = useAppStore();
  const { setActiveSection } = appStore;

  const handleClick = section => () => {
    setActiveSection(section);

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Styled.GetInTouch
      type={type}
      to={goTo}
      smooth={true}
      duration={500}
      width={width}
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
