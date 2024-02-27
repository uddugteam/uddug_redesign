import { NextPage } from 'next';
import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const MainLayout: React.FC = props => {
  const { children } = props;

  return (
    <div id='main-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const getLayout: (page: NextPage) => JSX.Element = page => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
