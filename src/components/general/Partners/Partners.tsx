import { motion } from 'framer-motion';
import React, { FC, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Wrapper from 'components/layout/Wrapper';
import Title, { TitleSizes } from 'components/ui/Title';
import PartnerLogo, { PartnersIconsList } from 'components/ui/PartnerLogo';

import styles from './Partners.module.css';

interface IPartnerProps {
  name: string;
  logo: React.ReactNode;
  url: string | null;
}

const partners: IPartnerProps[] = [
  {
    name: 'gateway',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.GATEWAY}
      />
    ),
    url: 'https://gateway.fm/',
  },
  {
    name: 'arsnl',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.ARSNL}
      />
    ),
    url: 'https://arsnl.art/',
  },
  {
    name: 'holygate',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.HOLYGATE}
      />
    ),
    url: null,
  },
  {
    name: 'revitt',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.REVITT}
      />
    ),
    url: 'https://revitt.consulting/',
  },
  {
    name: 'ffconsulting',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.FFCONSULTING}
      />
    ),
    url: 'https://www.ffconsulting.org',
  },
  {
    name: 'agente',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.AGENTE}
      />
    ),
    url: null,
  },
  {
    name: 'final01',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.FINALONE}
      />
    ),
    url: 'https://www.final01.com',
  },
  {
    name: 'trinity',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.TRINITY}
      />
    ),
    url: 'https://trinitymonsters.com',
  },
  {
    name: 'snarkart',
    logo: (
      <PartnerLogo
        className={styles.logo}
        partnerName={PartnersIconsList.SNARKART}
      />
    ),
    url: 'https://snark.art',
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

const Partners: FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
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
              autoplay={{ delay: swiperDelay }}
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
                    {partner.url ? (
                      <a
                        href={partner.url ? partner.url : '#'}
                        rel='noreferrer'
                        target='_blank'
                        onClick={e => {
                          if (!partner.url) e.preventDefault();
                        }}
                      >
                        <div className={styles.logoContainer}>
                          {partner.logo}
                        </div>
                      </a>
                    ) : (
                      <div className={styles.logoContainer}>{partner.logo}</div>
                    )}
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
