import { motion } from 'framer-motion';
import React from 'react';
import classNames from 'classnames';

import Wrapper from 'components/layout/Wrapper';
import Title, { TitleSizes } from 'components/ui/Title';
import Subtitle from 'components/ui/Subtitle';
import BackgroundCircle from 'components/ui/BackgroundCircle';
import { useScrollState } from 'contexts/scrollStateContext';
import { useScreenSize } from 'hooks/useScreenSize';
import Icon from 'components/general/Icon';

import styles from './Careers.module.css';

interface Vacation {
  name: string;
  sphere: string;
  position: string;
  techStack: string[];
  type: string;
  link: string;
}

const vacations: Vacation[] = [
  {
    name: 'Golang developer',
    sphere: 'Fin tech',
    position: 'Middle',
    type: 'Part Time',
    techStack: [
      'Go',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Go-swagger',
      'Cobra',
      'Viper',
    ],
    link: 'https://pyrite-yumberry-ec6.notion.site/Junior-Middle-Go-developer-34372d88fc9b412c9f2a4e80ce21de2e',
  },
  {
    name: 'Solidity dev',
    sphere: 'NFT marketplace',
    position: 'Senior',
    type: 'Part Time',
    techStack: [
      'Solidity',
      'JavaScript',
      'NodeJS',
      'Polygon',
      'React',
      'truffle',
      'hardhat',
    ],
    link: 'https://pyrite-yumberry-ec6.notion.site/Solidity-developer-d9034a5767a44c5095da055ea3e960c3',
  },
];

const VacationCard: React.VFC<Vacation> = props => {
  const { sphere, type, techStack, position, name, link } = props;

  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={link}
      className={classNames(styles.vacationCard)}
    >
      <div className={styles.name}>{name}</div>
      <Icon name={'arrow'} className={styles.arrow} />
      <div className={classNames(styles.sphere, styles.attributeValue)}>
        <div className={styles.label}>Sphere</div>
        <div className={styles.value}>{sphere}</div>
      </div>
      <div className={classNames(styles.position, styles.attributeValue)}>
        <div className={styles.label}>Position</div>
        <div className={styles.value}>{position}</div>
      </div>
      <div className={classNames(styles.type, styles.attributeValue)}>
        <div className={styles.label}>Type</div>
        <div className={styles.value}>{type}</div>
      </div>
      <div className={classNames(styles.techStack, styles.attributeValue)}>
        <div className={styles.label}>Tech Stack</div>
        <div className={styles.value}>
          {techStack.reduce(
            (currentString, currentValue) => `${currentString}, ${currentValue}`
          )}
        </div>
      </div>
    </a>
  );
};

const Careers = () => {
  const {
    refs: { careers },
  } = useScrollState();

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop' || screenSize === 'tablet-landscape';

  return (
    <div className={styles.root} ref={careers} id='careers'>
      <Wrapper>
        <div className={styles.inner}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Title className={styles.title} size={TitleSizes.MEDIUM}>
              <span className='accentSecondaryText'>We are hiring</span>{' '}
              professionals for our team
            </Title>
            <Subtitle className={styles.description}>
              &quot;Uddug&quot; has enjoyed steady, solid growth in its years of
              business, and talented, productive people made it possible. Please
              check the open positions
            </Subtitle>
          </motion.div>
          <motion.div
            className={styles.vacationsList}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {vacations.map(vacation => (
              <VacationCard key={vacation.name} {...vacation} />
            ))}
          </motion.div>
          <motion.div
            className={styles.contactsText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Send your CV to{' '}
            <a
              href='mailto:hr@uddug.com'
              className={classNames(styles.links, 'accentPrimaryText')}
            >
              hr@uddug.com
            </a>{' '}
            or{' '}
            <a
              href={'https://www.linkedin.com/company/uddug'}
              target='_blank'
              rel='noreferrer'
              className={classNames(styles.links, 'accentSecondaryText')}
            >
              LinkedIn
            </a>
          </motion.div>
          <BackgroundCircle className={styles.backgroundCircle} />
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Careers);
