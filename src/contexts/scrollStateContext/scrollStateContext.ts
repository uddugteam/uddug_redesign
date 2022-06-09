import React, { RefObject } from 'react';

export interface ScrollRefs {
  projects: RefObject<any>;
  team: RefObject<any>;
  careers: RefObject<any>;
  internship: RefObject<any>;
  contactUs: RefObject<any>;
  partners: RefObject<any>;
}

interface ScrollContext {
  scroll: [boolean, (status: boolean) => void];
  refs: ScrollRefs;
}

export const ScrollStateContext = React.createContext<ScrollContext>(
  undefined!
);

export const useScrollState = () => {
  const context = React.useContext(ScrollStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
