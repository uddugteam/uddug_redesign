import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import Link from 'next/link';

import Wrapper from 'components/layout/Wrapper';
import { useScreenSize } from 'hooks/useScreenSize';
import Title, { TitleSizes } from 'components/ui/Title';
import Subtitle from 'components/ui/Subtitle';
import Button from 'components/ui/Button';
import BackgroundCircle from 'components/ui/BackgroundCircle';

import styles from './MainBlock.module.css';

const setWideScreenPosition = (groupToMove: any, pxToMove: number) => {
  groupToMove.position.x += pxToMove;
};

const setDefaultPosition = (groupToMove: any, pxToMove: number) => {
  groupToMove.position.x -= pxToMove;
};

const MainBlock: React.VFC = () => {
  // const spline = useRef<Application | null>(null);
  const splineContainer = useRef<HTMLDivElement | null>(null);
  // const screenSize = useScreenSize();
  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  // const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  // const [isWide, setIsWide] = useState<boolean>(screenSize === 'desktop');

  // const pxToMove = 0;

  const onLoad = (splineApp: Application) => {
    // spline.current = splineApp;
    // setIsSplineLoaded(true);
    if (splineContainer.current) {
      splineContainer.current.style.opacity = '0';
      setTimeout(() => {
        if (splineContainer.current) {
          splineContainer.current.style.opacity = '1';
        }
      }, 100);
    }
  };

  // useEffect(() => {
  //   if (!isSplineLoaded) {
  //     return;
  //   }

  //   setIsFirstLoad(prevIsFirstLoad => {
  //     let groupToMove;

  //     if (prevIsFirstLoad && !isWide) {
  //       return false;
  //     }

  //     if (spline && spline.current) {
  //       groupToMove = spline.current.findObjectById(
  //         'cc1a3bc8-a4a6-430d-91e6-9bcc7409697b'
  //       );
  //     }

  //     if (isWide) {
  //       setWideScreenPosition(groupToMove, pxToMove);
  //     } else {
  //       setDefaultPosition(groupToMove, pxToMove);
  //     }

  //     if (prevIsFirstLoad) {
  //       return false;
  //     }

  //     return prevIsFirstLoad;
  //   });
  // }, [isSplineLoaded, isWide]);

  // useEffect(() => {
  //   const resizeHandler = () => {
  //     setIsWide(screenSize === 'desktop');
  //   };

  //   window.addEventListener('resize', resizeHandler);
  //   window.addEventListener('orientationchange', resizeHandler);

  //   resizeHandler();
  //   return () => {
  //     window.removeEventListener('resize', resizeHandler);
  //     window.removeEventListener('orientationchange', resizeHandler);
  //   };
  // }, [screenSize]);

  return (
    <section className={styles.root}>
      <div className={styles.spline} ref={splineContainer}>
        <Spline
          // original
          // scene='https://prod.spline.design/oDwsBbB3TIrZJuHZ/scene.splinecode'
          // responsive
          scene='https://prod.spline.design/R0HokTkUY3Kgqo-E/scene.splinecode'
          onLoad={onLoad}
        />
      </div>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title} size={TitleSizes.BIG}>
            We are{'\n'}production-focused{'\n'}development team
          </Title>
          <Subtitle className={styles.subtitle}>
            Supercharge your product with our team of experts who are passionate
            about blockchain
          </Subtitle>
          <Link href={'/#contact-us'} passHref>
            <Button className={styles.button} as={'a'} isHaveIcon={true}>
              We&apos;re ready to jumpstart your next project
            </Button>
          </Link>
        </div>
        <BackgroundCircle className={styles.backgroundCircle} />
      </Wrapper>
    </section>
  );
};

export default React.memo(MainBlock);
