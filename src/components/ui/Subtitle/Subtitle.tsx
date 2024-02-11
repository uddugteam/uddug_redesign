import classNames from 'classnames';
import { FC } from 'react';

import styles from './Subtitle.module.css';

interface ISubtitleProps {
  children: React.ReactNode;
  className: string;
}

const Subtitle: FC<ISubtitleProps> = ({ children, className }) => {
  const subtitleClassNames = classNames(className, styles.subtitle);

  return <p className={subtitleClassNames}>{children}</p>;
};

export { Subtitle };
