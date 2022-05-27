import React from 'react';
import classNames from 'classnames';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Careers.module.css';

interface Vacation {
  name: string;
  sphere: string;
  position: string;
  techStack: string[];
  type: string;
}

const vacations: Vacation[] = [
  {
    name: 'Rust developer',
    sphere: 'Fin tech',
    position: 'Middle',
    type: 'Full Time',
    techStack: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
  },
  {
    name: 'Rust developer2',
    sphere: 'Fin tech',
    position: 'Middle',
    type: 'Full Time',
    techStack: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
  },
  {
    name: 'Rust developer3',
    sphere: 'Fin tech',
    position: 'Middle',
    type: 'Full Time',
    techStack: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
  },
];

const VacationCard: React.VFC<Vacation> = props => {
  const { sphere, type, techStack, position, name } = props;

  return (
    <div className={classNames(styles.vacationCard, styles.attributeValue)}>
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
    </div>
  );
};

const Careers = () => {
  const {
    refs: { careers },
  } = useScrollState();

  return (
    <div className={styles.root} ref={careers}>
      <div className={styles.header}>
        We are <span className='purpleText'>hiring</span> professionals for our{' '}
        <span className='orangeText'>team</span>
      </div>
      <div className={styles.description}>
        &quot;Uddug&quot; has enjoyed steady, solid growth in its years of
        business, and talented, productive people made it possible. Please check
        the open positions
      </div>
      <div className={styles.vacationsList}>
        {vacations.map(vacation => (
          <VacationCard key={vacation.name} {...vacation} />
        ))}
      </div>
      <div className={styles.contactsText}>
        Send your CV to{' '}
        <a className={classNames(styles.links, 'orangeText')}>hr@uddug.com</a>{' '}
        or <a className={classNames(styles.links, 'purpleText')}>LinkedIn</a>
      </div>
    </div>
  );
};

export default Careers;
