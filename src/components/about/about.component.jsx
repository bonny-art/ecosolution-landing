import React, { useEffect } from 'react';
import icons from '../../assets/sprite.svg';
import * as Styled from './about.styled';
import { useAppStore } from 'store/store';

import image01Tablet1x from '../../assets/images/about/img-01-tablet@1x.jpg';
import image01Tablet2x from '../../assets/images/about/img-01-tablet@2x.jpg';

import image01Desktop1x from '../../assets/images/about/img-01-desktop@1x.jpg';
import image01Desktop2x from '../../assets/images/about/img-01-desktop@2x.jpg';

import image02Tablet1x from '../../assets/images/about/img-02-tablet@1x.jpg';
import image02Tablet2x from '../../assets/images/about/img-02-tablet@2x.jpg';

import image02Desktop1x from '../../assets/images/about/img-02-desktop@1x.jpg';
import image02Desktop2x from '../../assets/images/about/img-02-desktop@2x.jpg';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;

  const [refAbout, inViewAbout] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    if (inViewAbout) {
      setActiveSection('about');
    }
  }, [inViewAbout, setActiveSection]);

  return (
    <>
      <Styled.Section name="about" id="about">
        <Styled.Container
          ref={refAbout}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.TextContainer>
            <h2>Main values of our company</h2>
            <p>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world's energy needs.
            </p>
          </Styled.TextContainer>

          <Styled.GridContainer>
            <Styled.GridBlock className="div1">
              <div className="title-block">
                <Styled.Icon aria-label="Openness">
                  <use href={`${icons}#openness`} />
                </Styled.Icon>
                <h3>Openness</h3>
              </div>

              <p>to the world, people, new ideas and projects</p>
            </Styled.GridBlock>

            <Styled.GridBlock className="div2">
              <div className="title-block">
                <Styled.Icon aria-label="Responsibility">
                  <use href={`${icons}#responsibility`} />
                </Styled.Icon>
                <h3>Responsibility</h3>
              </div>

              <p>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </Styled.GridBlock>

            {!isMobile && (
              <div className="div3">
                {isTablet && (
                  <img
                    src={image01Tablet1x}
                    srcSet={`${image01Tablet1x} 1x, ${image01Tablet2x} 2x`}
                    alt="Main visual"
                  />
                )}
                {isDesktop && (
                  <img
                    src={image01Desktop1x}
                    srcSet={`${image01Desktop1x} 1x, ${image01Desktop2x} 2x`}
                    alt="Main visual"
                  />
                )}
              </div>
            )}

            {!isMobile && (
              <div className="div4">
                {isTablet && (
                  <img
                    src={image02Tablet1x}
                    srcSet={`${image02Tablet1x} 1x, ${image02Tablet2x} 2x`}
                    alt="Main visual"
                  />
                )}
                {isDesktop && (
                  <img
                    src={image02Desktop1x}
                    srcSet={`${image02Desktop1x} 1x, ${image02Desktop2x} 2x`}
                    alt="Main visual"
                  />
                )}
              </div>
            )}

            <Styled.GridBlock className="div5">
              <div className="title-block">
                <Styled.Icon aria-label="Innovation">
                  <use href={`${icons}#innovation`} />
                </Styled.Icon>
                <h3>Innovation</h3>
              </div>

              <p>
                we use the latest technology to implement non-standard solutions
              </p>
            </Styled.GridBlock>

            <Styled.GridBlock className="div6">
              <div className="title-block">
                <Styled.Icon aria-label="Quality">
                  <use href={`${icons}#quality`} />
                </Styled.Icon>
                <h3>Quality</h3>
              </div>

              <p>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </Styled.GridBlock>
          </Styled.GridContainer>
        </Styled.Container>
      </Styled.Section>
    </>
  );
};
