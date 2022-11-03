import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';

const { scroller } = Scroll;

import { useScreenSize } from 'hooks/useScreenSize';
import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './MainBlock.module.css';

const MainBlock: React.VFC = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === 'mobile';

  const rootRef = useRef<HTMLDivElement>(null);

  const scrollToPartners = () => {
    scroller.scrollTo('partners', {
      duration: 1500,
      containerId: 'home-page',
      smooth: true,
    });
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (rootRef.current)
        rootRef.current.style.height =
          document.documentElement.clientHeight - 58 + 'px';
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', resizeHandler);

    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', resizeHandler);
    };
  }, []);

  return (
    <div
      className={styles.root}
      ref={rootRef}
      style={{
        height:
          typeof window !== 'undefined'
            ? window.innerHeight
            : 'calc(100vh - 60px - 58px)',
      }}
    >
      <motion.span
          className={styles.mainLabel}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .6
              }
            },
          }}>
        We are{isMobile ? <br /> : ' '}production-focused{' '}
        <span className='orangeText'>development</span> team
      </motion.span>
      <motion.span
          className={styles.descriptionText}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .8
              }
            },
          }}>
        Team have deep industry IT expertise in the development of startups,
        independent private projects, public business.
      </motion.span>
      <motion.div
          className={styles.directionsList}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .6,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1
              }
            },
          }}>
        <div
          className={classNames(styles.technicalConsulting, styles.gridElement)}
        >
          <Icon name={'technical-consulting'} className={styles.icon} />
          Technical Consulting
        </div>
        <div className={classNames(styles.finTech, styles.gridElement)}>
          <Icon name={'fin-tech'} className={styles.icon} />
          FinTech
        </div>
        <div className={classNames(styles.blockchain, styles.gridElement)}>
          <Icon name={'blockchain'} className={styles.icon} />
          Blockchain and NFT
        </div>
        <div className={classNames(styles.startups, styles.gridElement)}>
          <Icon name={'startups'} className={styles.icon} />
          Startups
        </div>
        <div className={classNames(styles.cloud, styles.gridElement)}>
          <Icon name={'cloud'} className={styles.icon} />
          Cloud architecture
        </div>
        <div className={classNames(styles.machine, styles.gridElement)}>
          <Icon name={'machine'} className={styles.icon} />
          Machine Learning
        </div>
      </motion.div>
      <Icon name='grid' className={styles.grid} />
      <Icon
        name='arrow-scroll'
        className={styles.arrowScroll}
        onClick={scrollToPartners}
      />
    </div>
  );
};

export default React.memo(MainBlock);
