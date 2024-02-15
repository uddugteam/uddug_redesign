import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay, Pagination } from 'swiper/modules';

import HolygateSVG from '/public/icons/holygate.svg';
import RevittSVG from '/public/icons/revitt.svg';
import AgenteSVG from '/public/icons/agente.svg';
import ArsnlSVG from '/public/icons/arsnl.svg';
import GatewaySVG from '/public/icons/gateway.svg';
import FfconsultingSVG from '/public/icons/ffconsulting.svg';
import TrinitySVG from '/public/icons/trinity.svg';
import SnarkArtSVG from '/public/icons/snarkart.svg';
import FinalOneSVG from '/public/icons/final01.svg';

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
    url: null,
  },
  {
    name: 'revitt',
    logo: <RevittSVG className={styles.logo} />,
    url: 'https://revitt.consulting/',
  },
  {
    name: 'agente',
    logo: <AgenteSVG className={styles.logo} />,
    url: null,
  },
  {
    name: 'arsnl',
    logo: <ArsnlSVG className={styles.logo} />,
    url: 'https://arsnl.art/',
  },
  {
    name: 'gateway',
    logo: <GatewaySVG className={styles.logo} />,
    url: 'https://gateway.fm/',
  },
  {
    name: 'ffconsulting',
    logo: <FfconsultingSVG className={styles.logo} />,
    url: 'https://www.ffconsulting.org',
  },
  {
    name: 'trinity',
    logo: <TrinitySVG className={styles.logo} />,
    url: 'https://trinitymonsters.com',
  },
  {
    name: 'snarkart',
    logo: <SnarkArtSVG className={styles.logo} />,
    url: 'https://snark.art',
  },
  {
    name: 'final01',
    logo: <FinalOneSVG className={styles.logo} />,
    url: 'https://www.final01.com',
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
