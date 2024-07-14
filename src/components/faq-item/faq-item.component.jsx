import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './faq-item.styled';
import icons from '../../assets/sprite.svg';

export const FAQItem = ({ question, answer, isOpened, toggleOpen }) => {
  const itemRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (itemRef.current) {
      const height = itemRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [isOpened, answer]);

  return (
    <Styled.Item>
      <Styled.Question
        type="button"
        aria-label={isOpened ? 'Collapse question' : 'Expand question'}
        onClick={toggleOpen}
      >
        <Styled.Icon isOpened={isOpened}>
          <use href={`${icons}#${isOpened ? 'minus' : 'plus'}`}></use>
        </Styled.Icon>
        <span>{question}</span>
      </Styled.Question>

      <Styled.Collapse isOpened={isOpened} height={contentHeight}>
        <Styled.Answer ref={itemRef}>{answer}</Styled.Answer>
      </Styled.Collapse>
    </Styled.Item>
  );
};
