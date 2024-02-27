import React from 'react';

import { getLayout } from 'components/layout/MainLayout';
import MainBlock from 'components/general/MainBlock';
import Bullets from 'components/general/Bullets';
import Partners from 'components/general/Partners';
import Projects from 'components/general/Projects';
import Team from 'components/general/Team';
import Careers from 'components/general/Careers';
import ContactUs from 'components/general/ContactUs';
import Footer from 'components/layout/Footer';
// import Mission from 'components/general/Mission';
// import Internship from 'components/general/Internship';
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
  return (
    <main id={'home-page'} className={styles.root}>
      <MainBlock />
      <Bullets bullets={bullets} />
      <Partners />
      <Projects />
      <ContactUs />
      <Team />
      <Careers />
      {/* <Footer /> */}
      {/* <Internship /> */}
      {/* <Mission /> */}
      {/* <RightBadge /> */}
    </main>
  );
};

HomePage.getLayout = getLayout;

export default HomePage;
