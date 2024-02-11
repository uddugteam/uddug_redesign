import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

import Wrapper from 'components/layout/Wrapper';
import { useScreenSize } from 'hooks/useScreenSize';
import Title from 'components/ui/Title';
import { TitleSizes } from 'components/ui/Title/Title';
import Subtitle from 'components/ui/Subtitle';
import Button from 'components/ui/Button';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './MainBlock.module.css';

const MainBlock: React.VFC = () => {
  const spline = useRef<any>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop';

  const onLoad = (splineApp: any) => {
    spline.current = splineApp;
    setIsSplineLoaded(true);
  };

  useEffect(() => {
    if (!(isWide && isSplineLoaded)) {
      return;
    }

    if (spline && spline.current) {
      console.log(32131);
      const groupToMove = spline.current.findObjectById(
        'cc1a3bc8-a4a6-430d-91e6-9bcc7409697b'
      );
      groupToMove.position.x += 2500;
    }
  }, [isSplineLoaded, isWide]);

  return (
    <div className={styles.root}>
      <div className={styles.spline}>
        <Spline
          scene='https://prod.spline.design/oDwsBbB3TIrZJuHZ/scene.splinecode'
          onLoad={onLoad}
        />
      </div>
      <Wrapper>
        <motion.div
          className={styles.inner}
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
        >
          <Title className={styles.title} size={TitleSizes.BIG}>
            We are{'\n'}production-focused{'\n'}development team
          </Title>
          <Subtitle className={styles.subtitle}>
            Have strong experience in the IT development of startups,
            independent private projects, public business
          </Subtitle>
          <Button className={styles.button}>
            We&apos;re ready to jumpstart your next project
          </Button>
        </motion.div>
        <BackgroundCircle className={styles.backgroundCircle} />
      </Wrapper>
    </div>
  );
};

export default React.memo(MainBlock);
