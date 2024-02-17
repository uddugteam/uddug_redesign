import React, { FC } from 'react';
import { motion } from 'framer-motion';

import Wrapper from 'components/layout/Wrapper';
import Title, { TitleSizes } from 'components/ui/Title';
import Subtitle from 'components/ui/Subtitle';
import ContactForm from 'components/general/ContactForm';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './ContactUs.module.css';

const ContactUs: FC = () => {
  return (
    <section className={styles.root} id='contact-us'>
      <Wrapper>
        <div className={styles.inner}>
          <div className={styles.card}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Title className={styles.title} size={TitleSizes.MEDIUM}>
                Let’s discuss your project
              </Title>
              <Subtitle>
                Contact us - we will be glad
                <br />
                to dive into your project
              </Subtitle>
            </motion.div>
            <motion.div
              className={styles.form}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          <BackgroundCircle className={styles.backgroundCircleFirst} />
          <BackgroundCircle className={styles.backgroundCircleSecond} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;
