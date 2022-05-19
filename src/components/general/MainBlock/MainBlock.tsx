import React, {ReactNode} from 'react';
import classNames from "classnames";

import {ScreenSize, useScreenSize} from "hooks/useScreenSize";
import Icon from "components/general/Icon";

import styles from './MainBlock.module.css'


const descriptionTexts: Record<ScreenSize, ReactNode> = {
  'mobile': <>Have strong experience in the IT<br/>development of startups, independent<br/>private projects, public business</>,
  'tablet-vertical': <>Have strong experience in the IT development of<br/>startups, independent private projects, public business</>,
  'tablet-landscape': <>Have strong experience in the IT development of startups, independent private<br/>projects, public business</>,
  'desktop': <>Have strong experience in the IT development of startups, independent private<br/>projects, public business</>
}

const MainBlock: React.VFC = () => {

  const screenSize = useScreenSize()
  const isMobile = screenSize === 'mobile'

  return (
    <div className={styles.root}>
      <span
        className={styles.mainLabel}
      >
        We are{isMobile ? <br/> : ' '}production-focused <span className='orangeText'>development</span> team
      </span>
      <span className={styles.descriptionText}>
        {descriptionTexts[screenSize]}
      </span>
      <div className={styles.directionsList}>
        <div className={classNames(styles.technicalConsulting, styles.gridElement)}>
          <Icon name={'technical-consulting'} className={styles.icon}/>
          Technical Consulting
        </div>
        <div className={classNames(styles.finTech, styles.gridElement)}>
          <Icon name={'fin-tech'} className={styles.icon}/>
          FinTech
        </div>
        <div className={classNames(styles.blockchain, styles.gridElement)}>
          <Icon name={'blockchain'} className={styles.icon}/>
          Blockchain and NFT
        </div>
        <div className={classNames(styles.startups, styles.gridElement)}>
          <Icon name={'startups'} className={styles.icon}/>
          Startups
        </div>
        <div className={classNames(styles.cloud, styles.gridElement)}>
          <Icon name={'cloud'} className={styles.icon}/>
          Cloud architecture
        </div>
        <div className={classNames(styles.machine, styles.gridElement)}>
          <Icon name={'machine'} className={styles.icon}/>
          Machine Learning
        </div>
      </div>
      <Icon name={'grid'} className={styles.grid}/>
      <Icon name={'arrow-scroll'} className={styles.arrowScroll}/>
    </div>
  );
};

export default MainBlock;