import { useMediaQuery } from 'react-responsive';

import { About } from 'components/about/about.component';

import { Cases } from 'components/cases/cases.component';
import { ContactUs } from 'components/contact-us/contact-us.component';
import { Electricity } from 'components/electricity/electricity.component';
import { FAQ } from 'components/faq/faq.component';
import { Footer } from 'components/footer/footer.component';
import { Header } from 'components/header/header.component';
import { Main } from 'components/main/main.component';
import { useEffect } from 'react';
import { useAppStore } from 'store/store';

export const App = () => {
  const appStore = useAppStore();
  const { setDevice, activeSection } = appStore;
  console.log('🚀 ~ activeSection:', activeSection);

  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279.9px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    setDevice(isMobile, isTablet, isDesktop);
  }, [isMobile, isTablet, isDesktop, setDevice]);

  // const sectionKeys = Object.keys(sectionNames);

  return (
    <>
      <Header />

      <Main />

      <About />

      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
};
