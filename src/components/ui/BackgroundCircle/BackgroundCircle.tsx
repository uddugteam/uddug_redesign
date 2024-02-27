import classNames from 'classnames';
import { FC } from 'react';

import styles from './BackgroundCircle.module.css';

interface IBackgroundCircleProps {
  className: string;
}

const BackgroundCircle: FC<IBackgroundCircleProps> = ({ className }) => {
  const backgroundCircleClassnames = classNames(
    className,
    styles.BackgroundCircle
  );

  return <div className={backgroundCircleClassnames}></div>;
};

export { BackgroundCircle };
