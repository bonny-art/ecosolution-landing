import React from 'react';
import icons from '../../../assets/sprite.svg';
import * as Styled from './button-with-border.styled';
import { useAppStore } from 'store/store';
import { scroller } from 'react-scroll';

export const ButtonWithBorder = ({
  children,
  goTo,
  onClick,
  type = 'button',
}) => {
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
    <Styled.Button
      type={type}
      to={goTo}
      smooth={true}
      duration={500}
      onClick={handleClick(goTo)}
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
