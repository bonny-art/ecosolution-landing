import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './faq-item.styled';
import icons from '../../assets/sprite.svg';

export const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  const itemRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (itemRef.current) {
      const height = itemRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [isOpen, answer]);

  return (
    <Styled.Item>
      <Styled.Question
        type="button"
        aria-label="Show answer"
        onClick={toggleOpen}
      >
        <Styled.Icon isOpen={isOpen}>
          <use href={`${icons}#${isOpen ? 'minus' : 'plus'}`}></use>
        </Styled.Icon>
        <span>{question}</span>
      </Styled.Question>

      <Styled.Collapse isOpen={isOpen} height={contentHeight}>
        <Styled.Answer ref={itemRef}>{answer}</Styled.Answer>
      </Styled.Collapse>
    </Styled.Item>
  );
};
