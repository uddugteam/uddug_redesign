import React, { UIEvent } from 'react';

import { getLayout } from 'components/layout/MainLayout';
import { useScrollState } from 'contexts/scrollStateContext/scrollStateContext';
import MainBlock from 'components/general/MainBlock';
import Partners from 'components/general/Partners';
import Projects from 'components/general/Projects';
import Mission from 'components/general/Mission';
import Team from 'components/general/Team';
import Careers from 'components/general/Careers';
import Internship from 'components/general/Internship';
import Footer from 'components/general/Footer';
// import RightBadge from 'components/layout/RightBadge';

import { AppNextPage } from '../../../../global';
import styles from './HomePage.module.css';

const HomePage: AppNextPage = () => {
  const [isScrolled, setIsScrolled] = useScrollState().scroll;

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const newIsScrolled = !(scrollTop === 0);
    if (newIsScrolled !== isScrolled) setIsScrolled(newIsScrolled);
  };

  return (
    <div id={'home-page'} className={styles.root} onScroll={scrollHandler}>
      <MainBlock />
      <Partners />
      <Projects />
      <Mission />
      <Team />
      <Careers />
      <Internship />
      <Footer />
      {/* <RightBadge /> */}
    </div>
  );
};

HomePage.getLayout = getLayout;

export default HomePage;
