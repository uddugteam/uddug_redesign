import React, { FC } from 'react';

import Wrapper from 'components/layout/Wrapper';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './Bullets.module.css';

interface IBulletProps {
  bullets: { title: string; ico: string }[];
}

const Bullets: FC<IBulletProps> = ({ bullets }) => {
  return (
    <section className={styles.bullets}>
      <Wrapper>
        <div className={styles.inner}>
          <ul className={styles.list}>
            {bullets &&
              bullets.length &&
              bullets.map((bullet, index) => (
                <li className={styles.item} key={bullet.title + index}>
                  <div
                    className={styles.ico}
                    style={{
                      backgroundImage: `url('icons/${bullet.ico}.svg')`,
                    }}
                  ></div>
                  <span className={styles.title}>{bullet.title}</span>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
      <BackgroundCircle className={styles.backgroundCircle} />
      <BackgroundCircle className={styles.backgroundCircleSecond} />
    </section>
  );
};

export default React.memo(Bullets);
