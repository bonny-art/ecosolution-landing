import React from 'react';
import * as Styled from './slide.styled';
import icons from '../../assets/sprite.svg';

export const Slide = ({ slide }) => {
  const { imageUrl, location, company, description, date } = slide;

  return (
    <Styled.Slide>
      <img src={imageUrl} alt={description} />

      <Styled.Caption>
        <Styled.NameBox>
          <p>
            {location}
            <br />
            {company}
          </p>

          <a href="#" areaLabel={`Read more about ${description}`}>
            <svg>
              <use href={`${icons}#arrow-up-right`} />
            </svg>
          </a>
        </Styled.NameBox>

        <Styled.DescriptionBox>
          <p>{description}</p>
          <p>{date}</p>
        </Styled.DescriptionBox>
      </Styled.Caption>
    </Styled.Slide>
  );
};
