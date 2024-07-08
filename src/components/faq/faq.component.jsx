import { FAQItem } from 'components/faq-item/faq-item.component';
import { faqs } from 'constants/faqs';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppStore } from 'store/store';
import * as Styled from './faq.styled';
import { ButtonWithDot } from 'shared/components/button-with-dot/button-with-dot.component';

export const FAQ = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const [refMain, inViewMain] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewMain) {
      setActiveSection('main');
    }
  }, [inViewMain, setActiveSection]);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = index => () => {
    setOpenIndex(index === openIndex ? openIndex : index);
  };

  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        const height = containerRef.current.clientHeight;
        setContainerHeight(height);
      }, 350);
    }
  }, [openIndex]);

  return (
    <>
      <div></div>
      <Styled.Section name="main" id="main">
        <Styled.Container
          containerHeight={containerHeight}
          ref={refMain}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.Title>
            <p>Frequently Asked Questions</p>
          </Styled.Title>

          <Styled.Accordion ref={containerRef}>
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
        </Styled.Container>
      </Styled.Section>
    </>
  );
};
