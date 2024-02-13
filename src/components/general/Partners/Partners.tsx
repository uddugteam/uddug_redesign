import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay, Pagination } from 'swiper/modules';

import HolygateSVG from '/public/icons/colored-partner12.svg';
import LimeSVG from '/public/icons/colored-partner1.svg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Wrapper from 'components/layout/Wrapper';
import Title, { TitleSizes } from 'components/ui/Title';
import { useScreenSize } from 'hooks/useScreenSize';
import { useScrollState } from 'contexts/scrollStateContext';

import styles from './Partners.module.css';

interface IPartnerProps {
  name: string;
  logo: React.ReactNode;
  url: string | null;
}

const partners: IPartnerProps[] = [
  {
    name: 'holygate',
    logo: <HolygateSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <LimeSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <HolygateSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <LimeSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <HolygateSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <LimeSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <HolygateSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
  {
    name: 'holygate',
    logo: <LimeSVG className={styles.logo} />,
    url: 'http://holygate.com',
  },
];

const breakpoints = {
  1024: {
    slidesPerView: 5,
    spaceBetween: 20,
    grid: {
      rows: 1,
    },
  },
};

const Partners = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop';
  const swiperDelay = 3000;

  return (
    <section className={styles.root} id='partners'>
      <Wrapper>
        <div className={styles.inner}>
          <div className={styles.partnersCard}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Title size={TitleSizes.MEDIUM} as={'h2'}>
                Trusted development{' '}
                <span className='accentSecondaryText'>partners</span>
              </Title>
            </motion.div>
            <Swiper
              wrapperClass={styles.swiper}
              modules={[Grid, Pagination, Autoplay]}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              onBeforeInit={(swiper: SwiperClass) => {
                swiperRef.current = swiper;
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: styles.active,
                renderBullet: function (index: number, className: string) {
                  return `<span class="${className} ${styles.bullet}" style="transition: all ${swiperDelay}ms linear"></span>`;
                },
              }}
              breakpoints={breakpoints}
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{ delay: swiperDelay, disableOnInteraction: true }}
              onSwiper={() => {
                if (swiperRef.current) {
                  swiperRef.current.pagination.el.classList.add(
                    styles.pagination
                  );
                }
              }}
            >
              {partners &&
                partners.length &&
                partners.map((partner, index) => (
                  <SwiperSlide className={styles.slide} key={partner.name}>
                    <div className={styles.logoContainer}>{partner.logo}</div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default React.memo(Partners);
