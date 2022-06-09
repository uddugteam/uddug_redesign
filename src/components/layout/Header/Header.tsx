import React from 'react';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';

const { scroller } = Scroll;

import Icon from 'components/general/Icon';
import { ScrollRefs, useScrollState } from 'contexts/scrollStateContext';
import { useScreenSize } from 'hooks/useScreenSize';

import styles from './Header.module.css';

const Header: React.VFC = () => {
  const { scroll, refs } = useScrollState();
  const [isScrolled] = scroll;

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop' || screenSize === 'tablet-landscape';

  const scrollToElement = (ref: keyof ScrollRefs) => {
    refs[ref].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const smoothScrollToTheContactUs = () => {
    scroller.scrollTo('contactUs', {
      duration: isWide ? 1000 : 3000,
      containerId: 'home-page',
      smooth: true,
    });
  };

  return (
    <div className={classNames(styles.wrapper, { [styles.light]: isScrolled })}>
      <nav className={styles.root}>
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
            onClick={smoothScrollToTheContactUs}
            className={styles.contactUs}
          >
            Contact us
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
