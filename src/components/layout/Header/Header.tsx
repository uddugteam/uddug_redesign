import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import LogoSVG from '/public/icons/light-logotype.svg';

import { useScreenSize } from 'hooks/useScreenSize';
import Wrapper from 'components/layout/Wrapper';
import Button from 'components/ui/Button';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './Header.module.css';

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
];

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop';
  const headerClassnames = classNames(
    styles.header,
    isScrolled && [styles.scrolled],
    isMenuOpened && styles.opened,
    router.pathname.includes('privacy-policy') && [styles.scrolled]
  );

  const backgroundCircleClassnames = classNames(styles.backgroundCircle);

  return (
    <header className={headerClassnames}>
      <Wrapper>
        <nav className={styles.root}>
          <LogoSVG className={styles.logo} />
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
                <Link href={'/#contact-us'} passHref>
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
                    <Link
                      href={navLink.link}
                      key={navLink.title + index}
                      passHref
                    >
                      <div
                        className={styles.navButton}
                        onClick={() => setIsMenuOpened(!isMenuOpened)}
                      >
                        {navLink.title}
                      </div>
                    </Link>
                  ))}
              </div>
              <Link href={'/#contactUs'} passHref>
                <Button
                  className={styles.contactUs}
                  isAlt={true}
                  isCenteredText={true}
                >
                  Contact us
                </Button>
              </Link>
              {/* <BackgroundCircle className={backgroundCircleClassnames} /> */}
            </div>
          )}
        </nav>
      </Wrapper>
    </header>
  );
};

export default React.memo(Header);
