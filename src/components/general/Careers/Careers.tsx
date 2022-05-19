import React from 'react';

import {useScrollState} from "contexts/scrollStateContext";

import styles from './Careeer.module.css'

const Careers = () => {

  const {refs: {careers}} = useScrollState()

  return (
    <div
      ref={careers}
      className={styles.root}
    >
      <div className={styles.header}>
        Trusted development <span className='orangeText'>partners</span>
      </div>
    </div>
  );
};

export default Careers;