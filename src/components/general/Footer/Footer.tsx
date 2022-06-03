import React from 'react';
import classNames from 'classnames';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Footer.module.css';

const Footer = () => {
  const {
    refs: { contactUs },
  } = useScrollState();

  return (
    <div className={styles.wrapper}>
      <div ref={contactUs} className={styles.root}>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.header}>Contact us</div>
            <div className={styles.description}>
              Write about your idea or ask a question via the feedback form or
              in another convenient way
            </div>
            <a
              href='mailto:info@uddug.com'
              className={classNames(styles.link, 'purpleText')}
            >
              info@uddug.com
            </a>
            <a
              href='mailto:hr@uddug.com'
              className={classNames(styles.link, 'orangeText')}
            >
              hr@uddug.com
            </a>
            <div className={styles.socialLinks}>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/company/uddug'
              >
                <Icon name={'linkedIn'} className={styles.icon} />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='http://github.com/uddugteam'
              >
                <Icon name={'github'} className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.infoLinks}>
              <a className={styles.infoLink} target='_blank' rel='noreferrer'>
                Privacy policy
              </a>
              <a className={styles.infoLink} target='_blank' rel='noreferrer'>
                Terms & Conditions
              </a>
              <a className={styles.infoLink} target='_blank' rel='noreferrer'>
                Cookie Policy
              </a>
            </div>
            <div>Uddug © 2013</div>
          </div>
        </div>
      </div>
      <Icon name='grid' className={styles.grid} />
    </div>
  );
};

export default Footer;
