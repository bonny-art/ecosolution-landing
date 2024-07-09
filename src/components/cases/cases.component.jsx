import React, { useEffect, useState } from 'react';
import * as Styled from './cases.styled';
import { useAppStore } from 'store/store';
import icons from '../../assets/sprite.svg';

import { useInView } from 'react-intersection-observer';

import { Slide } from 'components/slide/slide.component';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { cases } from 'constants/cases';

export const Cases = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const [refCases, inViewCases] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewCases) {
      setActiveSection('cases');
    }
  }, [inViewCases, setActiveSection]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = cases.length;

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <Styled.Section name="cases" id="cases">
        <Styled.Container
          ref={refCases}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.TitleBox>
            <h2>Successful cases of our company</h2>
            <Styled.ControlsBox>
              <p>
                {isMobile
                  ? `${currentSlide + 1}`.padStart(2, '0')
                  : `${((currentSlide + 1) % totalSlides) + 1}`.padStart(
                      2,
                      '0'
                    )}
                <span> / {`${totalSlides}`.padStart(2, '0')}</span>
              </p>
              <Styled.ButtonsBox>
                <button onClick={prevSlide} className="custom-button-prev">
                  <Styled.Icon>
                    <use href={`${icons}#arrow-left`} />
                  </Styled.Icon>
                </button>
                <button onClick={nextSlide} className="custom-button-next">
                  <Styled.Icon>
                    <use href={`${icons}#arrow-right`} />
                  </Styled.Icon>
                </button>
              </Styled.ButtonsBox>
            </Styled.ControlsBox>
          </Styled.TitleBox>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: '.custom-button-next',
              prevEl: '.custom-button-prev',
            }}
            loop="true"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {cases.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <Slide key={slide.id} draggable slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.Container>
      </Styled.Section>
    </>
  );
};
