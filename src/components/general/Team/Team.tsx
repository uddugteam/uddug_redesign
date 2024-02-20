import React, { FC, useRef } from 'react';
import classNames from 'classnames';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Wrapper from 'components/layout/Wrapper';
import Title, { TitleSizes } from 'components/ui/Title';
import Tabs from 'components/ui/Tabs';
import { SocialIcons } from 'components/ui/Socials';
import TeamMember from 'components/ui/TeamMember';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './Team.module.css';

const founders = [
  {
    firstName: 'Mike',
    lastName: 'Manko',
    position: 'CEO',
    photoPath: './team/mike.png',
    socials: [
      {
        icon: SocialIcons.FACEBOOK,
        link: 'https://www.facebook.com/stones.rolling.31',
      },
      {
        icon: SocialIcons.LINKEDIN,
        link: 'https://www.linkedin.com/in/mikhail-manko-97a491a2/',
      },
      { icon: SocialIcons.GITHUB, link: 'https://github.com/MikeMS-sys' },
    ],
  },
  {
    firstName: 'Andrey',
    lastName: 'Skurlatov',
    position: 'CTO',
    photoPath: './team/andrew.png',
    socials: [
      {
        icon: SocialIcons.FACEBOOK,
        link: 'https://www.facebook.com/andrey.skurlatov',
      },
      {
        icon: SocialIcons.LINKEDIN,
        link: 'https://www.linkedin.com/in/andrew-skurlatov/',
      },
      { icon: SocialIcons.GITHUB, link: 'https://github.com/andskur' },
      { icon: SocialIcons.TWITTER, link: 'https://twitter.com/Andskur1' },
    ],
  },
];

const team = [
  {
    firstName: 'Andrey',
    lastName: 'Solovov',
    position: 'Smart Contract Lead',
    photoPath: './team/solovov.png',
    socials: [
      {
        icon: SocialIcons.LINKEDIN,
        link: 'https://www.linkedin.com/in/andrey-solovov-bb665884/',
      },
      { icon: SocialIcons.GITHUB, link: 'https://github.com/asolovov' },
    ],
  },
  {
    firstName: 'Pavel',
    lastName: 'Dodonov',
    position: 'Backend Lead',
    photoPath: './team/pavel.png',
    socials: [
      {
        icon: SocialIcons.LINKEDIN,
        link: 'https://www.linkedin.com/in/paveldodonov/',
      },
      { icon: SocialIcons.GITHUB, link: 'https://github.com/Pashteto' },
    ],
  },
];

const breakpoints = {
  720: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const Team: FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const swiperDelay = 3000;

  const coloredSpanClassNames = classNames(
    'accentSecondaryText',
    styles.coloredSpan
  );

  const tabs = [
    {
      title: 'Founders',
      content: (
        <Swiper
          wrapperClass={styles.swiper}
          modules={[Autoplay, Pagination]}
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
          // loop={true}
          centerInsufficientSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: swiperDelay }}
          onSwiper={() => {
            if (swiperRef.current) {
              swiperRef.current.pagination.el.classList.add(styles.pagination);
            }
          }}
        >
          {founders &&
            founders.length &&
            founders.map(founder => (
              <SwiperSlide
                className={styles.slide}
                key={founder.firstName + founder.lastName}
              >
                <TeamMember info={founder} />
              </SwiperSlide>
            ))}
        </Swiper>
      ),
    },
    {
      title: 'Team',
      content: (
        <Swiper
          wrapperClass={styles.swiper}
          modules={[Autoplay, Pagination]}
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
          // loop={true}
          centerInsufficientSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: swiperDelay }}
          onSwiper={() => {
            if (swiperRef.current) {
              swiperRef.current.pagination.el.classList.add(styles.pagination);
            }
          }}
        >
          {team &&
            team.length &&
            team.map(teamMember => (
              <SwiperSlide
                className={styles.slide}
                key={teamMember.firstName + teamMember.lastName}
              >
                <TeamMember info={teamMember} />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <div className={styles.teamMore}>
              <div className={styles.teamMoreInner}>
                <p className={styles.teamMoreTitle}>And 10+</p>
                <p className={styles.teamMoreText}>more talented engineers</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ),
    },
  ];

  return (
    <section className={styles.root} id='team'>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title} size={TitleSizes.MEDIUM} as={'h2'}>
            We are devoted to{' '}
            <span className={coloredSpanClassNames}>
              creating help humanity
            </span>{' '}
            get to the future faster Meet
          </Title>
          <Tabs className={styles.tabs} tabs={tabs} />
          <BackgroundCircle className={styles.backgroundCircle} />
        </div>
      </Wrapper>
    </section>
  );
};

export default React.memo(Team);
