import { FC, useState } from 'react';
import classNames from 'classnames';

import Button from 'components/ui/Button';

import styles from './Tabs.module.css';

interface ITabsProps {
  className: string;
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
}

const Tabs: FC<ITabsProps> = ({ className, tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsClassNames = classNames(className, styles.tabs);

  return (
    <div className={tabsClassNames}>
      <div className={styles.controls}>
        {tabs &&
          tabs.length &&
          tabs.map((tabItem, index) => (
            <Button
              className={classNames({
                [styles.buttonActive]: index === activeTabIndex,
                [styles.button]: true,
              })}
              onClick={() => {
                setActiveTabIndex(index);
              }}
              key={tabItem.title}
            >
              {tabItem.title}
            </Button>
          ))}
      </div>
      {tabs[activeTabIndex].content}
    </div>
  );
};

export default Tabs;
