import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import mike from '/public/team/mike.jpg';
import andrew from '/public/team/andrew.jpg';
import ivan from '/public/team/ivan.jpg';
import anuar from '/public/team/anuar.jpg';
import nikita from '/public/team/nikita.jpg';
import constantine from '/public/team/constantine.jpg';
import alexanderA from '/public/team/alexanderA.jpg';
import alexanderK from '/public/team/alexanderK.jpg';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Team.module.css';

interface SocialLinks {
  facebook: string | null;
  linkedIn: string | null;
  twitter: string | null;
  github: string | null;
}

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
  img: typeof mike;
  socialLinks: SocialLinks;
}

const TeamMember: React.VFC<TeamMemberProps> = props => {
  const { img, socialLinks, position, name } = props;

  return (
    <div className={styles.teamMember}>
      <div className={styles.teamMemberImageWrapper}>
        <Image src={img} alt={name} />
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
    <div className={styles.wrapper}>
      <div className={styles.root} ref={team}>
        <div className={styles.header} style={{ gridArea: 'h1' }}>
          Meet our <span className='orangeText'>leadership</span>
        </div>
        <div className={styles.founder} style={{ gridArea: 'f1' }}>
          <div className={styles.founderImageWrapper}>
            <Image src={mike} alt='founder' />
          </div>
          <div className={styles.name}>Mike Manko</div>
          <div className={styles.position}>Head of Product</div>
          <SocialLinks
            facebook={'https://www.facebook.com/stones.rolling.31'}
            linkedIn={'https://www.linkedin.com/in/mikhail-manko-97a491a2/'}
            twitter={null}
            github={'https://github.com/MikeMS-sys'}
          />
        </div>
        <div className={styles.founder} style={{ gridArea: 'f2' }}>
          <div className={styles.founderImageWrapper}>
            <Image src={andrew} alt='founder' />
          </div>
          <div className={styles.name}>Andrey Skurlatov</div>
          <div className={styles.position}>Technical Lead</div>
          <SocialLinks
            facebook={'https://www.facebook.com/andrey.skurlatov'}
            linkedIn={'https://www.linkedin.com/in/andrew-skurlatov/'}
            twitter={'https://twitter.com/Andskur1'}
            github={'https://github.com/andskur'}
          />
        </div>
        <div className={styles.header} style={{ gridArea: 'h2' }}>
          Our <span className='purpleText'>team</span>
        </div>
        <div style={{ gridArea: 'c1' }} className={styles.teamColumn}>
          <TeamMember
            name={'Anuar Zhumaev'}
            position={'Lead Designer'}
            img={anuar}
            socialLinks={{
              linkedIn: 'https://www.linkedin.com/in/yxorama/',
              twitter: null,
              facebook: null,
              github: null,
            }}
          />
          <TeamMember
            name={'Nikita Velko'}
            position={'Senior Frontend Developer'}
            img={nikita}
            socialLinks={{
              facebook: 'https://www.facebook.com/n1ckgreat',
              linkedIn: 'https://www.linkedin.com/in/nikichv/',
              github: 'https://github.com/nikichv',
              twitter: null,
            }}
          />
          <TeamMember
            name={'Alexander Aglerimov'}
            position={'Senior Backend Developer'}
            img={alexanderA}
            socialLinks={{
              facebook: null,
              linkedIn: 'https://www.linkedin.com/in/formiat/',
              github: 'https://github.com/formiat',
              twitter: null,
            }}
          />
        </div>
        <div style={{ gridArea: 'c2' }} className={styles.teamColumn}>
          <TeamMember
            name={'Constantine Czerniak'}
            position={'Data Scientist'}
            img={constantine}
            socialLinks={{
              linkedIn: 'https://www.linkedin.com/in/%D1%81czerniak/',
              github: 'https://github.com/Snaaby',
              facebook: null,
              twitter: null,
            }}
          />
          <TeamMember
            name={'Ivan Podtsebnev'}
            position={'DevOps Engineer'}
            img={ivan}
            socialLinks={{
              facebook: 'https://www.facebook.com/ivan.podtsebnev',
              linkedIn: 'https://www.linkedin.com/in/naykip/',
              github: 'https://github.com/naykip',
              twitter: null,
            }}
          />
          <TeamMember
            name={'Alexander Kuzin'}
            position={'DevOps Engineer'}
            img={alexanderK}
            socialLinks={{
              linkedIn: 'https://www.linkedin.com/in/alexanderkuzin',
              github: 'https://github.com/KuzinAU',
              facebook: 'https://facebook.com/alexanderkuzinrus',
              twitter: null,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Team);
