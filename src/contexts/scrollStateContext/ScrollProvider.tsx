import React, { useReducer } from 'react';

import {
  ScrollRefs,
  ScrollStateContext,
} from 'contexts/scrollStateContext/scrollStateContext';

const scrollReducer = (state: boolean, newState: boolean): boolean => {
  return newState;
};

const refs: ScrollRefs = {
  careers: React.createRef(),
  internship: React.createRef(),
  projects: React.createRef(),
  team: React.createRef(),
  contactUs: React.createRef(),
  partners: React.createRef(),
};

const ScrollProvider: React.FC = ({ children }) => {
  const store = useReducer(scrollReducer, false);
  return (
    <ScrollStateContext.Provider
      value={{
        scroll: store,
        refs,
      }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
};

export default ScrollProvider;
