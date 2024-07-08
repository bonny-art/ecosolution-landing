import React from 'react';
import * as Styled from './slide.styled';
import icons from '../../assets/sprite.svg';
import { Notify } from 'notiflix';
import { theme } from 'styles';

export const Slide = ({ slide }) => {
  const { imageUrl, location, company, description, date } = slide;

  const handleClick = description => () => {
    Notify.info(`Soon you will find more information about ${description}.`, {
      width: '300px',
      borderRadius: '0px',
      cssAnimationStyle: 'fade',
      info: {
        background: theme.colors.green,
        textColor: theme.colors.black,
        fontFamily: 'Fira Sans',
        fontSize: '16px',
        notiflixIconColor: theme.colors.black,
      },
    });
  };

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

          <button
            onClick={handleClick(description)}
            aria-label={`Read more about ${description}`}
          >
            <svg>
              <use href={`${icons}#arrow-up-right`} />
            </svg>
          </button>
        </Styled.NameBox>

        <Styled.DescriptionBox>
          <p>{description}</p>
          <p>{date}</p>
        </Styled.DescriptionBox>
      </Styled.Caption>
    </Styled.Slide>
  );
};
