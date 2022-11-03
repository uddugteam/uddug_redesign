import { motion } from 'framer-motion';
import React from 'react';
import classNames from 'classnames';

import { useScreenSize } from 'hooks/useScreenSize';
import Icon from 'components/general/Icon';

import styles from './Mission.module.css';

const Mission = () => {
  const isMobile = useScreenSize() === 'mobile';

  return (
    <div className={styles.root}>
      <motion.div
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
        <>
          We are devoted to creating{isMobile ? <br /> : ' '}
          <span className='purpleText'>help humanity</span>
          <br />
          <span className='orangeText'>get to the future</span> faster
        </>
      </motion.div>
      <Icon name={'lines-grid'} className={classNames('grid', 'bottomGrid')} />
    </div>
  );
};

export default React.memo(Mission);
