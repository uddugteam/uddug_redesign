import { motion } from 'framer-motion';
import React, { FC } from 'react';

import Icon from 'components/general/Icon';

import styles from './Internship.module.css';

const Internship: FC = () => {
  return (
    <motion.div
      className={styles.wrapper}
      id='internship'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className={styles.root}>
        <div className={styles.textBlock}>
          <div className={styles.header}>Internship with us</div>
          <div className={styles.description}>
            As part of a co-op with world famous blockchain ecosystems, we
            invite talented interns who want to gain experience in the
            commercial development of our own high-tech open source projects
          </div>
          <div className={styles.contactUsButton}>Contact us</div>
        </div>
        <Icon name={'internship'} className={styles.photo} />
      </div>
    </motion.div>
  );
};

export default React.memo(Internship);
