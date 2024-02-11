import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useScreenSize } from 'hooks/useScreenSize';
import { useScrollState } from 'contexts/scrollStateContext';
import Wrapper from 'components/layout/Wrapper';
import Icon from 'components/general/Icon';
import Button from 'components/ui/Button';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './Header.module.css';

const scrollSpeed = 1;

const navLinks = [
  {
    title: 'Projects',
    link: '/#projects',
  },
  {
    title: 'Team',
    link: '/#team',
  },
  {
    title: 'Careers',
    link: '/#careers',
  },
  {
    title: 'Internship',
    link: '/#internship',
  },
];

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const router = useRouter();

  const isPrivacyPolicyPage = useMemo(
    () => router.pathname.indexOf('privacy-policy'),
    [router.pathname]
  );

  const { scroll } = useScrollState();
  const [isScrolled] = scroll;

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop';

  const headerClassnames = classNames(
    styles.header,
    isScrolled && [styles.scrolled],
    isMenuOpened && styles.opened
  );

  const backgroundCircleClassnames = classNames(styles.backgroundCircle);

  return (
    <div className={headerClassnames}>
      <Wrapper>
        <nav className={styles.root}>
          <Icon name={'light-logotype'} className={styles.logo} />
          <div className={styles.buttonsWrapper}>
            {isWide ? (
              <>
                {navLinks &&
                  navLinks.length &&
                  navLinks.map((navLink, index) => (
                    <div
                      className={styles.navButton}
                      key={navLink.title + index}
                    >
                      <Link href={navLink.link}>
                        <a className={styles.navButtonLink}>{navLink.title}</a>
                      </Link>
                    </div>
                  ))}
                <Link href={'/#contactUs'}>
                  <Button isAlt={true}>Contact us</Button>
                </Link>
              </>
            ) : (
              <Button
                onClick={() => {
                  setIsMenuOpened(!isMenuOpened);
                }}
                className={styles.menuToggler}
              >
                {isMenuOpened ? '' : 'Menu'}
              </Button>
            )}
          </div>
          {isWide ? null : (
            <div className={styles.mobileMenu}>
              <div className={styles.buttonsWrapper}>
                {navLinks &&
                  navLinks.length &&
                  navLinks.map((navLink, index) => (
                    <Link href={navLink.link} key={navLink.title + index}>
                      <div
                        className={styles.navButton}
                        onClick={() => setIsMenuOpened(!isMenuOpened)}
                      >
                        {navLink.title}
                      </div>
                    </Link>
                  ))}
              </div>
              <Link href={'/#contactUs'}>
                <Button
                  className={styles.contactUs}
                  isAlt={true}
                  isCenteredText={true}
                >
                  Contact us
                </Button>
              </Link>
              <BackgroundCircle className={backgroundCircleClassnames} />
            </div>
          )}
        </nav>
      </Wrapper>
    </div>
  );
};

export default Header;
