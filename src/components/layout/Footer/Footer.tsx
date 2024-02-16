import React, { FC } from 'react';
import Link from 'next/link';

import Wrapper from 'components/layout/Wrapper';
import Socials, { SocialIcons } from 'components/ui/Socials';

import LogoSVG from '/public/icons/light-logotype.svg';

import styles from './Footer.module.css';

const socialItems = [
  { icon: SocialIcons.FACEBOOK, link: 'https://www.facebook.com/uddug.dev' },
  {
    icon: SocialIcons.LINKEDIN,
    link: 'https://www.linkedin.com/company/uddug/',
  },
  { icon: SocialIcons.TWITTER, link: 'https://twitter.com/Uddug_dev' },
  { icon: SocialIcons.GITHUB, link: 'https://github.com/uddugteam' },
];

const emails = ['info@uddug.com'];

const navLinks = [
  {
    name: 'Privacy policy',
    link: '/privacy-policy',
  },
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.inner}>
          <div className={styles.footerTop}>
            <LogoSVG className={styles.logo} />
            <div className={styles.footerMedia}>
              <Socials className={styles.socials} socialItems={socialItems} />
              <ul className={styles.emailList}>
                {emails &&
                  emails.length &&
                  emails.map(item => (
                    <li key={item}>
                      <a className={styles.email} href={`mailto:${item}`}>
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <ul className={styles.nav}>
              {navLinks &&
                navLinks.length &&
                navLinks.map(item => (
                  <li className={styles.navItem} key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
            </ul>
            <span className={styles.copyright}>Uddug © 2024</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
