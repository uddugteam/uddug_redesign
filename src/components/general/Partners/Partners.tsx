import React, { useMemo, useState } from 'react';
import { useMedia } from 'react-use';

import Icon from 'components/general/Icon';

import styles from './Partners.module.css';

const partners: string[] = [
  'partner1',
  'partner2',
  'partner3',
  'partner4',
  'partner5',
  'partner6',
  'partner7',
  'partner8',
  'partner9',
];

const Partners = () => {
  const [isAllPartnersOpen, setIsAllPartnersOpen] = useState(false);
  const [hoverState, setHoverState] = useState(() =>
    new Array(partners.length).fill(false)
  );

  const isWide = useMedia('(min-width: 1024px)');

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
          <div key={partner} className={styles.iconWrapper}>
            <Icon
              name={hoverState[index] ? `colored-${partner}` : partner}
              onMouseOver={() => handleMouseOverPartnerLogo(index)}
              onMouseLeave={handleMouseLeavePartnerLogo}
            />
          </div>
        ))}
      </div>
      {!isAllPartnersOpen && (
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
