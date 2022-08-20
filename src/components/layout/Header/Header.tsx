import React, { useMemo } from 'react';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router';

const { scroller } = Scroll;

import Icon from 'components/general/Icon';
import { ScrollRefs, useScrollState } from 'contexts/scrollStateContext';
import { useScreenSize } from 'hooks/useScreenSize';

import styles from './Header.module.css';

const Header: React.VFC = () => {
  const router = useRouter();

  const isPrivacyPolicyPage = useMemo(
    () => router.pathname.indexOf('privacy-policy'),
    [router.pathname]
  );

  const { scroll, refs } = useScrollState();
  const [isScrolled] = scroll;

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop' || screenSize === 'tablet-landscape';

  const scrollToElement = async (ref: keyof ScrollRefs) => {
    if (isPrivacyPolicyPage) {
      await router.push('/');
      refs[ref].current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    refs[ref].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const smoothScrollToTheContactUs = async () => {
    if (isPrivacyPolicyPage) {
      await router.push('/');
      scroller.scrollTo('contactUs', {
        duration: isWide ? 2000 : 4000,
        containerId: 'home-page',
        smooth: true,
      });
      return;
    }
    scroller.scrollTo('contactUs', {
      duration: isWide ? 1000 : 3000,
      containerId: 'home-page',
      smooth: true,
    });
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.light]: isScrolled && isPrivacyPolicyPage,
      })}
    >
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
