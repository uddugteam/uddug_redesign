import React from 'react';
import classNames from 'classnames';

import ContactForm from 'components/general/ContactForm';
import { useOutsideClick } from 'hooks/useOutsideClick';

import styles from './RightBadge.module.css';

const RightBadge = () => {
  const { ref, isShow, setIsShow } = useOutsideClick<HTMLDivElement>(false);

  return (
    <>
      <div className={styles.root} onClick={() => setIsShow(true)}>
        <span className={styles.text}>Write To Us</span>
      </div>
      <div
        className={classNames(styles.formWrapper, { [styles.visible]: isShow })}
        ref={ref}
      >
        <ContactForm />
      </div>
    </>
  );
};

export default RightBadge;
