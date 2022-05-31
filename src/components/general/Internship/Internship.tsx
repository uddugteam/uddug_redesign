import React from 'react';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Internship.module.css';

const Internship = () => {
  const {
    refs: { internship },
  } = useScrollState();

  return (
    <div ref={internship} className={styles.root}>
      <div className={styles.textBlock}>
        <div className={styles.header}>Internship with us</div>
        <div className={styles.description}>
          As part of a co-op with the famous blockchain funds, we invite
          talented interns who want to gain experience in the commercial
          development of our own high-tech open source projects
        </div>
        <div className={styles.contactUsButton}>Contact us</div>
      </div>
      <Icon name={'internship'} style={{ width: 254, alignSelf: 'end' }} />
    </div>
  );
};

export default Internship;
