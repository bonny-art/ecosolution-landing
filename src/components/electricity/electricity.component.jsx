import React, { useEffect, useState } from 'react';
import * as Styled from './electricity.styled';
import { useAppStore } from 'store/store';

import { useInView } from 'react-intersection-observer';
import { formatNumber } from 'utils/format-number';

export const Electricity = () => {
  const appStore = useAppStore();
  const { isMobile, isTablet, isDesktop, setActiveSection } = appStore;
  const [electricity, setElectricity] = useState(Math.floor(Date.now() / 1000));

  const [refMain, inViewMain] = useInView({
    rootMargin: `-45% 0px -45% 0px`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setElectricity(prevElectricity => prevElectricity + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inViewMain) {
      setActiveSection('main');
    }
  }, [inViewMain, setActiveSection]);

  return (
    <>
      <Styled.Section name="main" id="main">
        <Styled.Container
          ref={refMain}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Styled.Title>Electricity we produced for all time</Styled.Title>
          <Styled.Value>
            <span>{formatNumber(electricity, 'en-US')}</span>kWh
          </Styled.Value>
        </Styled.Container>
      </Styled.Section>
    </>
  );
};
