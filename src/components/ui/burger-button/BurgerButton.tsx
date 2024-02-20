import { useState, useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import classNames from 'classnames';

import Button from 'components/ui/Button';

import BurgerData from './burger.json';
import styles from './BurgerButton.module.css';

interface IBurgerButton {
  onClick: () => void;
  className?: string;
  outsideDirection: 1 | -1;
}

const BurgerButton: React.FC<IBurgerButton> = ({
  onClick,
  className,
  outsideDirection,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(outsideDirection || 1);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const playAnimation = () => {
    setIsPlaying(!isPlaying);
    if (lottieRef.current) {
      lottieRef.current.setDirection(direction);
      lottieRef.current.play();
    }
  };

  useEffect(() => {
    if (outsideDirection !== direction) {
      setDirection(outsideDirection);
      playAnimation();
    }
  }, [outsideDirection]);

  const burgetButtonClassNames = classNames(className, styles.root);

  return (
    <Button
      className={burgetButtonClassNames}
      onClick={() => {
        setDirection(-direction as 1 | -1);
        playAnimation();
        onClick();
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={BurgerData}
        loop={false}
        autoplay={false}
        style={{ height: 32, width: 32 }}
      />
    </Button>
  );
};

export default BurgerButton;
