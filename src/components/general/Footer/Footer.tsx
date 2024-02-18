import { motion } from 'framer-motion';
import React, { FC } from 'react';
import classNames from 'classnames';

import Icon from 'components/general/Icon';
import ContactForm from 'components/general/ContactForm';

import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.root}>
          <div className={styles.content}>
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className={styles.header}>Contact us</div>
              <div className={styles.description}>
                Write about your idea concept or ask a question via the feedback
                form or in another convenient way
              </div>
              <a
                href='mailto:biz@uddug.com'
                className={classNames(styles.link, 'purpleText')}
              >
                biz@uddug.com
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
                  href='https://github.com/uddugteam'
                >
                  <Icon name={'github'} className={styles.icon} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className={styles.footerInfo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className={styles.infoLinks}>
                <a
                  className={styles.infoLink}
                  target='_blank'
                  rel='noreferrer'
                  href='./privacy-policy.html'
                >
                  Privacy policy
                </a>
              </div>
              <div>Uddug © 2013</div>
            </motion.div>
          </div>

          <ContactForm />
        </div>
        <Icon name='grid' className={styles.grid} />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
