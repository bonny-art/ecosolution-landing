import React, { useEffect } from 'react';
import icons from '../../assets/sprite.svg';
import * as Styled from './contact-us.styled';
import { useAppStore } from 'store/store';
import { useInView } from 'react-intersection-observer';
import { socialLinks } from 'constants/socialLinks';
import { SocialLink } from 'components/social-link/social-link.container';
import { ContactUsForm } from 'components/contact-us-form/contact-us-form.component';
import { address, mail } from 'constants/contacts';
import { phoneNumbers } from 'constants/contacts';
import { formatPhoneNumber } from 'utils/format-phone';

export const ContactUs = () => {
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
        <Styled.Title>Contact us</Styled.Title>
        <Styled.MainBlock>
          <Styled.ContactsBlock>
            <Styled.ContactsBox>
              <h3>Phone:</h3>
              <div>
                {phoneNumbers.map(({ id, number }) => (
                  <a key={id} href={`tel:${number}`}>
                    <Styled.Icon>
                      <use href={`${icons}#call`} />
                    </Styled.Icon>
                    <span>{formatPhoneNumber(number)}</span>
                  </a>
                ))}
              </div>
            </Styled.ContactsBox>

            <Styled.ContactsBox>
              <h3>E-mail:</h3>
              <a href={`mailto:${mail}`}>
                <Styled.Icon>
                  <use href={`${icons}#mail`} />
                </Styled.Icon>
                <span>{mail}</span>
              </a>
            </Styled.ContactsBox>

            <Styled.ContactsBox>
              <h3>Address:</h3>
              <button onClick={openGoogleMaps}>
                <Styled.Icon>
                  <use href={`${icons}#map`} />
                </Styled.Icon>
                <span>{address}</span>
              </button>
            </Styled.ContactsBox>

            <Styled.SocialsBox>
              <h3>Social Networks:</h3>
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
            </Styled.SocialsBox>
          </Styled.ContactsBlock>

          <Styled.FormBlock>
            <ContactUsForm />
          </Styled.FormBlock>
        </Styled.MainBlock>
      </Styled.Container>
    </Styled.Section>
  );
};
