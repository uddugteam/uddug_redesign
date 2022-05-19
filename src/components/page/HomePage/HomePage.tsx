import React, {UIEvent} from 'react';

import {getLayout} from "components/layout/MainLayout";
import {useScrollState} from "contexts/scrollStateContext/scrollStateContext";
import MainBlock from "components/general/MainBlock";
import Careers from "components/general/Careers";

import {AppNextPage} from "../../../../global";
import styles from './HomePage.module.css'

const HomePage: AppNextPage = () => {

  const [_, setIsScrolled] = useScrollState().scroll

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop === 0)
      setIsScrolled(false)
    else
      setIsScrolled(true)
  }

  return (
    <div className={styles.root}
      onScroll={scrollHandler}
    >
      <MainBlock/>
      <Careers/>
    </div>
  );
};

HomePage.getLayout = getLayout

export default HomePage;