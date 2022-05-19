import {NextPage} from 'next';
import React from 'react';

import Header from 'components/layout/Header';
import ScrollProvider from "contexts/scrollStateContext";

const MainLayout: React.FC = props => {
  const {children} = props;

  return (
    <ScrollProvider>
      <div id='main-layout'>
        <Header/>
        {children}
      </div>
    </ScrollProvider>
  );
};

export const getLayout: (page: NextPage) => JSX.Element = page => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
