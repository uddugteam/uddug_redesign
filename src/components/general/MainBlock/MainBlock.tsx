import React from 'react';
import classNames from 'classnames';

import { useScreenSize } from 'hooks/useScreenSize';
import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './MainBlock.module.css';

const MainBlock: React.VFC = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === 'mobile';
  const {
    refs: { partners },
  } = useScrollState();

  const scrollToPartners = () => {
    partners.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.root}>
      <span className={styles.mainLabel}>
        We are{isMobile ? <br /> : ' '}production-focused{' '}
        <span className='orangeText'>development</span> team
      </span>
      <span className={styles.descriptionText}>
        Team have deep industry IT expertise in the development of startups,
        independent private projects, public business.
      </span>
      <div className={styles.directionsList}>
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
      </div>
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
