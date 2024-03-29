import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { useScreenSize } from 'hooks/useScreenSize';
import Wrapper from 'components/layout/Wrapper';
import Logo from 'components/ui/Logo';
import Button from 'components/ui/Button';
import BurgerButton from 'components/ui/burger-button';

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

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
  }, [isMenuOpened]);

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
          <Logo
            onClick={() => {
              setIsMenuOpened(false);
            }}
          />
          <div className={styles.buttonsWrapper}>
            {isWide ? (
              <>
                {navLinks &&
                  navLinks.length &&
                  navLinks.map((navLink, index) => (
                    <Link
                      href={navLink.link}
                      passHref
                      key={navLink.title + index}
                    >
                      <Button
                        className={classNames(styles.navButtonLink)}
                        as={'a'}
                      >
                        {navLink.title}
                      </Button>
                    </Link>
                  ))}
                <Link href={'/#contact-us'} passHref>
                  <Button isAlt={true}>Contact us</Button>
                </Link>
              </>
            ) : (
              <>
                <BurgerButton
                  className={styles.burgerButton}
                  outsideDirection={isMenuOpened ? -1 : 1}
                  onClick={() => setIsMenuOpened(!isMenuOpened)}
                />
                {/* <Button
                  onClick={() => {
                    setIsMenuOpened(!isMenuOpened);
                  }}
                  className={styles.menuToggler}
                >
                  {isMenuOpened ? '' : 'Menu'}
                </Button> */}
              </>
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
              <Link href={'/#contact-us'} passHref>
                <Button
                  className={styles.contactUs}
                  isAlt={true}
                  isCenteredText={true}
                  as={'a'}
                  onClick={() => {
                    setIsMenuOpened(false);
                  }}
                >
                  Contact us
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </Wrapper>
    </header>
  );
};

export default React.memo(Header);
