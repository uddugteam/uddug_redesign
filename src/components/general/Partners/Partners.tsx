import React, { useMemo, useState } from 'react';

import Icon from 'components/general/Icon';
import { useScreenSize } from 'hooks/useScreenSize';
import { useScrollState } from 'contexts/scrollStateContext';

import styles from './Partners.module.css';

interface Partner {
  name: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: 'partner1',
    url: 'https://lime-expo.ru/',
  },
  {
    name: 'partner12',
    url: 'http://holygate.com',
  },
  {
    name: 'partner4',
    url: 'google.com',
  },
  {
    name: 'partner5',
    url: 'google.com',
  },
  {
    name: 'partner7',
    url: 'google.com',
  },
  {
    name: 'partner8',
    url: 'https://snark.art/',
  },
  {
    name: 'partner9',
    url: 'google.com',
  },
  {
    name: 'partner10',
    url: 'https://revitt.consulting/',
  },
  {
    name: 'partner11',
    url: 'https://www.final01.agency/',
  },
  {
    name: 'partner2',
    url: 'https://macbio.ru/',
  },
  {
    name: 'partner3',
    url: 'https://spamorez.ru/',
  },
  {
    name: 'partner6',
    url: 'google.com',
  },
];

const Partners = () => {
  const {
    refs: { partners: partnersRef },
  } = useScrollState();

  const [isAllPartnersOpen, setIsAllPartnersOpen] = useState(false);
  const [hoverState, setHoverState] = useState(() =>
    new Array(partners.length).fill(false)
  );

  const screenSize = useScreenSize();
  const isDesktop = screenSize === 'desktop';
  const isWide = isDesktop || screenSize === 'tablet-landscape';

  const visiblePartners = useMemo(
    () => (isAllPartnersOpen ? partners : partners.slice(0, isWide ? 8 : 7)),
    [isAllPartnersOpen, isWide]
  );

  const handleMouseOverPartnerLogo = (index: number) => {
    if (!isDesktop) return;
    setHoverState(hoverState.map((status, i) => i === index));
  };

  const handleMouseLeavePartnerLogo = () => {
    if (!isDesktop) return;
    setHoverState(new Array(partners.length).fill(false));
  };

  const handleTogglePartnersVisibilityButtonClick = () => {
    setIsAllPartnersOpen(!isAllPartnersOpen);
  };

  return (
    <div className={styles.root} ref={partnersRef}>
      <div className={styles.header}>
        Trusted development <span className='orangeText'>partners</span>
      </div>
      <div className={styles.partners}>
        {visiblePartners.map((partner, index) => (
          <div key={partner.name} className={styles.iconWrapper}>
            <a target='_blank' rel='noreferrer' href={partner.url}>
              <Icon
                name={
                  hoverState[index] ? `colored-${partner.name}` : partner.name
                }
                style={{
                  cursor: 'pointer',
                }}
                onMouseOver={() => handleMouseOverPartnerLogo(index)}
                onMouseLeave={handleMouseLeavePartnerLogo}
              />
            </a>
          </div>
        ))}
      </div>
      <div
        className={styles.togglePartnersVisibilityButton}
        onClick={handleTogglePartnersVisibilityButtonClick}
      >
        {isAllPartnersOpen ? 'Roll Up' : 'Open all partners'}
      </div>
    </div>
  );
};

export default React.memo(Partners);
