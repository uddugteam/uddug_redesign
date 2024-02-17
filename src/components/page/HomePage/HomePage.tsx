import React, { UIEvent } from 'react';

import { getLayout } from 'components/layout/MainLayout';
import { useScrollState } from 'contexts/scrollStateContext/scrollStateContext';
import MainBlock from 'components/general/MainBlock';
import Bullets from 'components/general/Bullets';
import Partners from 'components/general/Partners';
import Projects from 'components/general/Projects';
import Mission from 'components/general/Mission';
import Team from 'components/general/Team';
import Careers from 'components/general/Careers';
import Internship from 'components/general/Internship';
// import Footer from 'components/general/Footer';
import Footer from 'components/layout/Footer';
// import RightBadge from 'components/layout/RightBadge';

import { AppNextPage } from '../../../../global';
import styles from './HomePage.module.css';

const bullets = [
  { title: 'Web3', ico: 'web3-badge' },
  { title: 'ML / AI', ico: 'ml-ai-badge' },
  { title: 'NFT', ico: 'nft-badge' },
  { title: 'DeFi', ico: 'defi-badge' },
  { title: 'Clouds', ico: 'clouds-badge' },
  { title: 'Consulting', ico: 'consulting-badge' },
];

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
      <Bullets bullets={bullets} />
      <Partners />
      <Projects />
      <Team />
      <Careers />
      <Footer />
      {/* <Internship /> */}
      {/* <Mission /> */}
      {/* <RightBadge /> */}
    </div>
  );
};

HomePage.getLayout = getLayout;

export default HomePage;
