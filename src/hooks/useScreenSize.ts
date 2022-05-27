import { useMedia } from 'react-use';
import { useState } from 'react';

export type ScreenSize =
  | 'desktop'
  | 'tablet-landscape'
  | 'tablet-vertical'
  | 'mobile';

export const useScreenSize = (): ScreenSize => {
  const [currentScreenSize, setCurrentScreenSize] =
    useState<ScreenSize>('mobile');

  const isMobile = useMedia('(max-width: 719px)', false);
  const isTabletVertical = useMedia(
    '(min-width: 720px) and (max-width: 1023px)',
    false
  );
  const isTabletLandscape = useMedia(
    '(min-width: 1024px) and (max-width: 1279px)',
    false
  );
  const isDesktop = useMedia('(min-width: 1280px)', false);

  if (isMobile) {
    if (currentScreenSize !== 'mobile') setCurrentScreenSize('mobile');
    return 'mobile';
  }
  if (isTabletVertical) {
    if (currentScreenSize !== 'tablet-vertical')
      setCurrentScreenSize('tablet-vertical');
    return 'tablet-vertical';
  }
  if (isTabletLandscape) {
    if (currentScreenSize !== 'tablet-landscape')
      setCurrentScreenSize('tablet-landscape');
    return 'tablet-landscape';
  }
  if (isDesktop) {
    if (currentScreenSize !== 'desktop') setCurrentScreenSize('desktop');
    return 'desktop';
  }
  return currentScreenSize;
};