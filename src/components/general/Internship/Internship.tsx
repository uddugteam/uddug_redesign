import { motion } from 'framer-motion';
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
      duration: 1000,
      containerId: 'home-page',
      smooth: true,
    });
  };

  return (
    <motion.div
        className={styles.wrapper}
        id='internship'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
      <div ref={internship} className={styles.root}>
        <div className={styles.textBlock}>
          <div className={styles.header}>Internship with us</div>
          <div className={styles.description}>
            As part of a co-op with world famous blockchain ecosystems, we
            invite talented interns who want to gain experience in the
            commercial development of our own high-tech open source projects
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
    </motion.div>
  );
};

export default React.memo(Internship);
