import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import founder from '/public/icons/founder.png';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Team.module.css';

interface SocialLinks {
  facebook: string | null;
  linkedIn: string | null;
  twitter: string | null;
  github: string | null;
}

const links: SocialLinks = {
  facebook: 'https://facebook.com/',
  linkedIn: 'https://linkedin.com/',
  twitter: 'https://twitter.com/',
  github: 'https://github.com/',
};

const SocialLinks: React.VFC<SocialLinks> = props => {
  const { facebook, github, twitter, linkedIn } = props;

  return (
    <div className={styles.socialLinks}>
      {facebook && (
        <a target='_blank' rel='noreferrer' href={facebook}>
          <Icon name={'facebook'} className={styles.socialLink} />
        </a>
      )}
      {linkedIn && (
        <a target='_blank' rel='noreferrer' href={linkedIn}>
          <Icon name={'linkedIn'} className={styles.socialLink} />
        </a>
      )}
      {twitter && (
        <a target='_blank' rel='noreferrer' href={twitter}>
          <Icon name={'twitter'} className={styles.socialLink} />
        </a>
      )}
      {github && (
        <a target='_blank' rel='noreferrer' href={github}>
          <Icon name={'github'} className={styles.socialLink} />
        </a>
      )}
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  img: typeof founder;
  socialLinks: SocialLinks;
}

const TeamMember: React.VFC<TeamMemberProps> = props => {
  const { img, socialLinks, position, name } = props;

  return (
    <div className={styles.teamMember}>
      <div className={styles.teamMemberImageWrapper}>
        <Image src={img} alt='team member' />
      </div>
      <div className={styles.teamMemberInfos}>
        <div className={classNames(styles.name, styles.teamMemberName)}>
          {name}
        </div>
        <div className={styles.position}>{position}</div>
        <SocialLinks {...socialLinks} />
      </div>
    </div>
  );
};

const Team = () => {
  const {
    refs: { team },
  } = useScrollState();

  return (
    <div className={styles.root} ref={team}>
      <div className={styles.header} style={{ gridArea: 'h1' }}>
        Meet our <span className='orangeText'>leadership</span>
      </div>
      <div className={styles.founder} style={{ gridArea: 'f1' }}>
        <div className={styles.founderImageWrapper}>
          <Image src={founder} alt='founder' />
        </div>
        <div className={styles.name}>Andrey Skurlatov</div>
        <div className={styles.position}>CEO</div>
        <SocialLinks
          facebook={'https://facebook.com/'}
          linkedIn={'https://linkedin.com/'}
          twitter={'https://twitter.com/'}
          github={'https://github.com/'}
        />
      </div>
      <div className={styles.founder} style={{ gridArea: 'f2' }}>
        <div className={styles.founderImageWrapper}>
          <Image src={founder} alt='founder' />
        </div>
        <div className={styles.name}>Andrey Skurlatov</div>
        <div className={styles.position}>CEO</div>
        <SocialLinks
          facebook={'https://facebook.com/'}
          linkedIn={'https://linkedin.com/'}
          twitter={'https://twitter.com/'}
          github={'https://github.com/'}
        />
      </div>
      <div className={styles.header} style={{ gridArea: 'h2' }}>
        Our <span className='purpleText'>team</span>
      </div>
      <div style={{ gridArea: 'c1' }} className={styles.teamColumn}>
        <TeamMember
          name={'Andrey Skuraltov'}
          position={'CEO'}
          img={founder}
          socialLinks={links}
        />
        <TeamMember
          name={'Andrey Skuraltov'}
          position={'CEO'}
          img={founder}
          socialLinks={links}
        />
      </div>
      <div style={{ gridArea: 'c2' }} className={styles.teamColumn}>
        <TeamMember
          name={'Andrey Skuraltov'}
          position={'CEO'}
          img={founder}
          socialLinks={links}
        />
        <TeamMember
          name={'Andrey Skuraltov'}
          position={'CEO'}
          img={founder}
          socialLinks={links}
        />
      </div>
    </div>
  );
};

export default Team;
