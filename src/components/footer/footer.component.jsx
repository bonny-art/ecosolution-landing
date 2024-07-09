import React, { useEffect } from 'react';
import icons from '../../assets/sprite.svg';
import * as Styled from './footer.styled';
import { useAppStore } from 'store/store';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';
import { address } from 'constants/adress';
import { socialLinks } from 'constants/socialLinks';
import { SocialLink } from 'components/social-link/social-link.container';

export const Footer = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const [refContactUs, inViewContactUs] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewContactUs) {
      setActiveSection('contact-us');
    }
  }, [inViewContactUs, setActiveSection]);

  const scrollTo = section => () => {
    setActiveSection(section);

    const offset = isDesktop ? -120 : -145;

    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?q=${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  return (
    <Styled.Section name="contact-us" id="contact-us">
      <Styled.Container
        ref={refContactUs}
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <div>
          {isMobile ? (
            <Styled.IconsContainer>
              <Styled.NavBox>
                <Styled.LogoGroup onClick={scrollTo('main')}>
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

                <Styled.Button onClick={scrollTo('main')}>
                  <svg>
                    <use href={`${icons}#arrow-up`} />
                  </svg>
                </Styled.Button>
              </Styled.NavBox>

              <Styled.IconsBox>
                {socialLinks.map(({ id, href, icon }) => (
                  <SocialLink
                    key={id}
                    href={href}
                    icon={icon}
                    label={id}
                    isDark
                  />
                ))}
              </Styled.IconsBox>
            </Styled.IconsContainer>
          ) : null}
        </div>

        <Styled.ContactsContainer>
          <button onClick={openGoogleMaps}>{address}</button>
          <div>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            <p>ecosolution © 2023</p>
          </div>
        </Styled.ContactsContainer>
      </Styled.Container>
    </Styled.Section>
  );
};
