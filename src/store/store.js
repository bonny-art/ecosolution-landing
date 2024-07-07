import { create } from 'zustand';

export const useAppStore = create(set => {
  return {
    isMobile: false,
    isTablet: false,
    isDesktop: false,

    activeSection: 'main',

    setDevice: (isMobile, isTablet, isDesktop) => {
      set(() => {
        return {
          isMobile: isMobile,
          isTablet: isTablet,
          isDesktop: isDesktop,
        };
      });
    },

    setActiveSection: section => {
      set(() => {
        return {
          activeSection: section,
        };
      });
    },
  };
});
