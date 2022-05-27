import React from 'react';
import classNames from 'classnames';
import { useMedia } from 'react-use';

import Icon from 'components/general/Icon';
import { ScrollRefs, useScrollState } from 'contexts/scrollStateContext';

import styles from './Header.module.css';

const Header: React.VFC = () => {
  const { scroll, refs } = useScrollState();
  const [isScrolled] = scroll;
  const isWide = useMedia('(min-width: 1024px)', false);

  const scrollToElement = (ref: keyof ScrollRefs) => {
    refs[ref].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={classNames(styles.root, { [styles.light]: isScrolled })}>
      <Icon
        name={isScrolled ? 'dark-logotype' : 'light-logotype'}
        className={styles.logo}
      />
      <div className={styles.buttonsWrapper}>
        {isWide && (
          <>
            <div
              onClick={() => scrollToElement('projects')}
              className={styles.navButton}
            >
              Projects
            </div>
            <div
              onClick={() => scrollToElement('team')}
              className={styles.navButton}
            >
              Team
            </div>
            <div
              onClick={() => scrollToElement('careers')}
              className={styles.navButton}
            >
              Careers
            </div>
            <div
              onClick={() => scrollToElement('internship')}
              className={styles.navButton}
            >
              Internship
            </div>
          </>
        )}
        <div
          onClick={() => scrollToElement('contactUs')}
          className={styles.contactUs}
        >
          Contact us
        </div>
      </div>
    </nav>
  );
};

export default Header;
