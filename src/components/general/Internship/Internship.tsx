import React from 'react';
import * as Scroll from 'react-scroll';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Internship.module.css';

const { scroller } = Scroll;

const Internship = () => {
  const {
    refs: { internship },
  } = useScrollState();

  const smoothScrollToTheContactUs = () => {
    scroller.scrollTo('contactUs', {
      duration: 300,
      containerId: 'home-page',
      smooth: true,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div ref={internship} className={styles.root}>
        <div className={styles.textBlock}>
          <div className={styles.header}>Internship with us</div>
          <div className={styles.description}>
            As part of a co-op with the famous blockchain funds, we invite
            talented interns who want to gain experience in the commercial
            development of our own high-tech open source projects
          </div>
          <div
            className={styles.contactUsButton}
            onClick={smoothScrollToTheContactUs}
          >
            Contact us
          </div>
        </div>
        <Icon name={'internship'} className={styles.photo} />
      </div>
    </div>
  );
};

export default React.memo(Internship);
