import React, { useMemo, useState } from 'react';
import { useMedia } from 'react-use';

import Icon from 'components/general/Icon';
import { useScreenSize } from 'hooks/useScreenSize';

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
    name: 'partner2',
    url: 'https://macbio.ru/',
  },
  {
    name: 'partner3',
    url: 'https://spamorez.ru/',
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
    name: 'partner6',
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
];

const Partners = () => {
  const [isAllPartnersOpen, setIsAllPartnersOpen] = useState(false);
  const [hoverState, setHoverState] = useState(() =>
    new Array(partners.length).fill(false)
  );

  const isWide = useMedia('(min-width: 1024px)');
  const isDesktop = useScreenSize() === 'desktop';

  const visiblePartners = useMemo(
    () => (isAllPartnersOpen ? partners : partners.slice(0, isWide ? 9 : 8)),
    [isAllPartnersOpen, isWide]
  );

  const handleMouseOverPartnerLogo = (index: number) => {
    setHoverState(hoverState.map((status, i) => i === index));
  };

  const handleMouseLeavePartnerLogo = () => {
    setHoverState(new Array(partners.length).fill(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        Trusted development <span className='orangeText'>partners</span>
      </div>
      <div className={styles.partners}>
        {visiblePartners.map((partner, index) => (
          <div key={partner.name} className={styles.iconWrapper}>
            <a target='_blank' rel='noreferrer' href={partner.url}>
              <Icon
                name={
                  hoverState[index] || !isDesktop
                    ? `colored-${partner.name}`
                    : partner.name
                }
                onMouseOver={() => handleMouseOverPartnerLogo(index)}
                onMouseLeave={handleMouseLeavePartnerLogo}
              />
            </a>
          </div>
        ))}
      </div>
      {!isAllPartnersOpen && !isWide && (
        <div
          className={styles.openAllPartnersButton}
          onClick={() => setIsAllPartnersOpen(true)}
        >
          Open all partners
        </div>
      )}
    </div>
  );
};

export default Partners;
