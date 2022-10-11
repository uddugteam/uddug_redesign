import React, { useMemo } from 'react';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router';

const { scroller } = Scroll;

import Icon from 'components/general/Icon';
import { ScrollRefs, useScrollState } from 'contexts/scrollStateContext';
import { useScreenSize } from 'hooks/useScreenSize';

import styles from './Header.module.css';

const scrollSpeed = 1;

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

  const smoothScrollElement = async (elementId: keyof ScrollRefs) => {
    const homePage = document.getElementById('home-page');
    const scrollToPx = refs[elementId].current?.getBoundingClientRect().top;
    if (!homePage || !scrollToPx) return;
    const duration = Math.abs(homePage.scrollTop - scrollToPx) / scrollSpeed;
    if (isPrivacyPolicyPage) {
      await router.push('/');
    }
    scroller.scrollTo(elementId, {
      duration: duration,
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
                onClick={() => smoothScrollElement('projects')}
                className={styles.navButton}
              >
                Projects
              </div>
              <div
                onClick={() => smoothScrollElement('team')}
                className={styles.navButton}
              >
                Team
              </div>
              <div
                onClick={() => smoothScrollElement('careers')}
                className={styles.navButton}
              >
                Careers
              </div>
              <div
                onClick={() => smoothScrollElement('internship')}
                className={styles.navButton}
              >
                Internship
              </div>
            </>
          )}
          <div
            onClick={() => smoothScrollElement('contactUs')}
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
