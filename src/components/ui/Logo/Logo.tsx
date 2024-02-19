import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import LogoSVG from '/public/icons/light-logotype.svg';

import styles from './Logo.module.css';

interface ILologProps {
  className?: string;
}

const Logo: FC<ILologProps> = ({ className }) => {
  const logoClassNames = classNames(className, styles.logo);

  return (
    <Link href={'/'} passHref>
      <LogoSVG className={logoClassNames} />
    </Link>
  );
};

export default Logo;
