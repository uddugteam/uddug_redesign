import { FC, ButtonHTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';

import ArrowSVG from 'public/icons/arrow.svg';

import styles from './Button.module.css';

type ClickHandler = () => void;

type EvtClickHandler = (
  event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
) => Promise<void>;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  onClick?: ClickHandler | EvtClickHandler;
  children?: React.ReactNode;
  target?: string;
  isAlt?: boolean;
  isCenteredText?: boolean;
  as?: 'a' | 'button';
  isHaveIcon?: boolean;
}

const Button: FC<IButtonProps> = ({
  className,
  href,
  onClick,
  children,
  target,
  isAlt,
  isCenteredText,
  as,
  isHaveIcon,
}) => {
  const ButtonTag = as ? as : 'button';

  const buttonClassNames = classNames(
    styles.button,
    className,
    isAlt && styles.alt,
    isCenteredText && styles.centeredText,
    isHaveIcon && styles.iconed
  );

  return (
    <ButtonTag
      className={buttonClassNames}
      onClick={onClick}
      {...(href && { href })}
      {...(target && { target })}
    >
      <div className={styles.mask}>
        <span className={styles.text}>{children}</span>
      </div>
      {isHaveIcon ? (
        <div className={styles.iconContainer}>
          <ArrowSVG className={styles.icon} />
        </div>
      ) : null}
    </ButtonTag>
  );
};

export { Button };
