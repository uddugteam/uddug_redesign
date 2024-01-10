import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

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
  img: string;
  socialLinks: SocialLinks;
}

const TeamMember: React.VFC<TeamMemberProps> = props => {
  const { img, socialLinks, position, name } = props;

  return (
    <div className={styles.teamMember}>
      <div className={styles.teamMemberImageWrapper}>
        <Image src={img} alt={name} width={82} height={82} />
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
    <div className={styles.wrapper} id='team'>
      <div className={styles.root} ref={team}>
        <motion.div
            className={styles.header}
            style={{ gridArea: 'h1' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          Meet our <span className='orangeText'>leadership</span>
        </motion.div>
        <motion.div
            className={styles.founder}
            style={{ gridArea: 'f1' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          <div className={styles.founderImageWrapper}>
            <Image
              src='./team/mike.png'
              alt='founder'
              width={300}
              height={300}
            />
          </div>
          <div className={styles.name}>Mike Manko</div>
          <div className={styles.position}>Head of Product</div>
          <SocialLinks
            facebook={'https://www.facebook.com/stones.rolling.31'}
            linkedIn={'https://www.linkedin.com/in/mikhail-manko-97a491a2/'}
            twitter={null}
            github={'https://github.com/MikeMS-sys'}
          />
        </motion.div>
        <motion.div
            className={styles.founder}
            style={{ gridArea: 'f2' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          <div className={styles.founderImageWrapper}>
            <Image
              src='./team/andrew.png'
              alt='founder'
              width={300}
              height={300}
            />
          </div>
          <div className={styles.name}>Andrey Skurlatov</div>
          <div className={styles.position}>Technical Lead</div>
          <SocialLinks
            facebook={'https://www.facebook.com/andrey.skurlatov'}
            linkedIn={'https://www.linkedin.com/in/andrew-skurlatov/'}
            twitter={'https://twitter.com/Andskur1'}
            github={'https://github.com/andskur'}
          />
        </motion.div>
        <motion.div
            className={styles.header}
            style={{ gridArea: 'h2' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          Our <span className='purpleText'>team</span>
        </motion.div>
        <motion.div
            style={{ gridArea: 'c1' }}
            className={styles.teamColumn}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          <TeamMember
            name={'Anuar Zhumaev'}
            position={'Art Director'}
            img='./team/anuar.png'
            socialLinks={{
              linkedIn: 'https://www.linkedin.com/in/yxorama/',
              twitter: null,
              facebook: null,
              github: null,
            }}
          />
          <TeamMember
            name={'Nikita Velko'}
            position={'Frontend Developer'}
            img='./team/nikita.png'
            socialLinks={{
              facebook: 'https://www.facebook.com/n1ckgreat',
              linkedIn: 'https://www.linkedin.com/in/nikichv/',
              github: 'https://github.com/nikichv',
              twitter: null,
            }}
          />
          {/*<TeamMember
            name={'Daniel Mironov'}
            position={'QA Engineer'}
            img='./team/daniel.png'
            socialLinks={{
              facebook: null,
              linkedIn: 'https://www.linkedin.com/in/daniel-mironov7/',
              github: 'https://github.com/1ance3t',
              twitter: null,
            }}
          />*/}
          <TeamMember
            name={'Andrey Solovov'}
            position={'Smart Contract Developer'}
            img='./team/solovov.png'
            socialLinks={{
              facebook: null,
              linkedIn: 'https://www.linkedin.com/in/daniel-mironov7/',
              github: 'https://github.com/1ance3t',
              twitter: null,
            }}
          />
        </motion.div>
        <motion.div
            style={{ gridArea: 'c2' }}
            className={styles.teamColumn}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
          {/*<TeamMember
            name={'Constantine Czerniak'}
            position={'Data Scientist'}
            img='./team/constantine.jpg'
            socialLinks={{
              linkedIn: 'https://www.linkedin.com/in/%D1%81czerniak/',
              github: 'https://github.com/Snaaby',
              facebook: null,
              twitter: null,
            }}
          />*/}
          <TeamMember
            name={'Ivan Podtsebnev'}
            position={'DevOps Engineer'}
            img='./team/ivan.png'
            socialLinks={{
              facebook: 'https://www.facebook.com/ivan.podtsebnev',
              linkedIn: 'https://www.linkedin.com/in/naykip/',
              github: 'https://github.com/naykip',
              twitter: null,
            }}
          />
          <TeamMember
            name={'Pavel Dodonov'}
            position={'Backend Developer'}
            img='./team/pavel.png'
            socialLinks={{
              facebook: null,
              linkedIn: 'https://www.linkedin.com/in/paveldodonov/',
              github: 'https://github.com/Pashteto',
              twitter: null,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Team);
