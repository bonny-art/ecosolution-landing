import React, { useEffect } from 'react';
import * as Styled from './main.styled';
import { useAppStore } from 'store/store';

import { useInView } from 'react-intersection-observer';

import imageMobile1x from '../../assets/images/main/hero-mobile@1x.jpg';
import imageMobile2x from '../../assets/images/main/hero-mobile@2x.jpg';
import imageTablet1x from '../../assets/images/main/hero-tablet@1x.jpg';
import imageTablet2x from '../../assets/images/main/hero-tablet@2x.jpg';
import imageDesktop1x from '../../assets/images/main/hero-desktop@1x.jpg';
import imageDesktop2x from '../../assets/images/main/hero-desktop@2x.jpg';
import { address, mail } from 'constants/contacts';
import { DivWithBorder } from 'shared/components/div-with-border/div-with-border.component';

export const Main = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?q=${encodeURIComponent(address.oneRow)}`,
      '_blank'
    );
  };

  const [refMain, inViewMain] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewMain) {
      setActiveSection('main');
    }
  }, [inViewMain, setActiveSection]);

  return (
    <>
      <Styled.Section name="main" id="main">
        <Styled.Container
          ref={refMain}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.TextBlock>
            <h1>RENEWABLE ENERGY For any task</h1>
            <Styled.TextBox>
              <p>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </p>
              <DivWithBorder goTo="cases">Learn more</DivWithBorder>
            </Styled.TextBox>
          </Styled.TextBlock>

          <Styled.ContactsBlock>
            <div>
              <button
                type="button"
                aria-label="Open Google Maps for Address"
                onClick={openGoogleMaps}
              >
                {address.oneRow}
              </button>
              <a href={`mailto:${mail}`} aria-label="Email">
                {mail}
              </a>
            </div>

            {!isMobile && <p>ecosolution © 2023</p>}
          </Styled.ContactsBlock>

          <div>
            {isMobile && (
              <img
                src={imageMobile1x}
                srcSet={`${imageMobile1x} 1x, ${imageMobile2x} 2x`}
                alt="Main visual"
              />
            )}
            {isTablet && (
              <img
                src={imageTablet1x}
                srcSet={`${imageTablet1x} 1x, ${imageTablet2x} 2x`}
                alt="Main visual"
              />
            )}
            {isDesktop && (
              <img
                src={imageDesktop1x}
                srcSet={`${imageDesktop1x} 1x, ${imageDesktop2x} 2x`}
                alt="Main visual"
              />
            )}
          </div>
        </Styled.Container>
      </Styled.Section>
    </>
  );
};
