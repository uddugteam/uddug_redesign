import React, { FC } from 'react';
import Image from 'next/image';

import Socials from 'components/ui/Socials';

import styles from './TeamMember.module.css';

interface ITeamMemberProps {
  info: {
    firstName: string;
    lastName: string;
    position: string;
    photoPath: string;
    socials: {
      icon: string;
      link: string;
    }[];
  };
}

const TeamMember: FC<ITeamMemberProps> = ({ info }) => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={info.photoPath}
        width='280'
        height='352'
        alt={`${info.firstName}  ${info.lastName}`}
      />
      <div className={styles.inner}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            {info.firstName}
            <br />
            {info.lastName}
          </h3>
          <span className={styles.position}>{info.position}</span>
        </div>
        <Socials className={styles.socials} socialItems={info.socials} />
      </div>
    </div>
  );
};

export default TeamMember;
