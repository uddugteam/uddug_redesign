import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  target?: string;
  isAlt?: boolean;
  isCenteredText?: boolean;
}

const Button: FC<IButtonProps> = ({
  className,
  href,
  onClick,
  children,
  target,
  isAlt,
  isCenteredText,
}) => {
  const buttonClassNames = classNames(
    styles.button,
    className,
    isAlt && styles.alt,
    isCenteredText && styles.centeredText
  );

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      {...(href && { href })}
      {...(target && { target })}
    >
      <div className={styles.mask}>
        <span className={styles.text}>{children}</span>
      </div>
    </button>
  );
};

export { Button };
