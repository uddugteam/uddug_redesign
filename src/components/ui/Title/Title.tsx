import { FC } from 'react';
import classNames from 'classnames';

import styles from './title.module.css';

interface ITitleProps {
  children: React.ReactNode;
  size: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TitleSizes = {
  BIG: 'big',
  MEDIUM: 'medium',
};

const Title: FC<ITitleProps> = ({
  children,
  size,
  className,
  as: Tag = 'h1',
}) => {
  const titleClassNames = classNames(
    className,
    styles.title,
    styles[`${size}`]
  );

  return <Tag className={titleClassNames}>{children}</Tag>;
};

export { Title, TitleSizes };
