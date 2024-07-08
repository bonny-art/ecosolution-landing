import { FAQItem } from 'components/faq-item/faq-item.component';
import { faqs } from 'constants/faqs';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppStore } from 'store/store';
import * as Styled from './faq.styled';
import { ButtonWithDot } from 'shared/components/button-with-dot/button-with-dot.component';

export const FAQ = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const [refFaq, inViewFaq] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewFaq) {
      console.log('🚀 ~ inViewFaq:', inViewFaq);
      setActiveSection('faq');
    }
  }, [inViewFaq, setActiveSection]);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = index => () => {
    setOpenIndex(index === openIndex ? openIndex : index);
  };

  return (
    <Styled.Section name="faq" id="faq">
      <Styled.Container
        ref={refFaq}
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {isMobile ? (
          <>
            <Styled.Title>
              <h2>Frequently Asked Questions</h2>
            </Styled.Title>

            <Styled.Accordion>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  toggleOpen={toggleFAQ(index)}
                />
              ))}
            </Styled.Accordion>

            <Styled.ButtonBox>
              <p>Didn't find the answer to your question? </p>
              <ButtonWithDot goTo="contact-us" width="130px">
                Contact Us
              </ButtonWithDot>
            </Styled.ButtonBox>
          </>
        ) : (
          <>
            <Styled.Accordion>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  toggleOpen={toggleFAQ(index)}
                />
              ))}
            </Styled.Accordion>

            <Styled.Sidebar>
              <Styled.Title>
                <h2>Frequently Asked Questions</h2>
              </Styled.Title>

              <Styled.ButtonBox>
                <p>Didn't find the answer to your question? </p>
                <ButtonWithDot goTo="contact-us" width="130px">
                  Contact Us
                </ButtonWithDot>
              </Styled.ButtonBox>
            </Styled.Sidebar>
          </>
        )}
      </Styled.Container>
    </Styled.Section>
  );
};
