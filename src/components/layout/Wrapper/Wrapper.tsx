import { FC } from 'react';

import styles from './Wrapper.module.css';

interface IWrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
