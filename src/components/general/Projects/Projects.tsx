import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Projects.module.css';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  otherTechnologies: string[];
  link: string | null;
}

const projects: Project[] = [
  {
    link: null,
    description:
      'Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'Eks',
      'Grpc',
      'PostgreSql',
      'PostgreSql1',
      'PostgreSql2',
      'PostgreSql3',
      'PostgreSql4',
    ],
    otherTechnologies: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
    name: 'Trusted Health Consul',
  },
  {
    link: 'https://www.google.ru/',
    description:
      'Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'Eks',
      'Grpc',
      'PostgreSql',
      'PostgreSql1',
      'PostgreSql2',
      'PostgreSql3',
      'PostgreSql4',
    ],
    otherTechnologies: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
    name: 'Trusted Health Consul1',
  },
  {
    link: 'https://www.google.ru/',
    description:
      'Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'Eks',
      'Grpc',
      'PostgreSql',
      'PostgreSql1',
      'PostgreSql2',
      'PostgreSql3',
      'PostgreSql4',
    ],
    otherTechnologies: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
    name: 'Trusted Health Consul2',
  },
  {
    link: 'https://www.google.ru/',
    description:
      'Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'Eks',
      'Grpc',
      'PostgreSql',
      'PostgreSql1',
      'PostgreSql2',
      'PostgreSql3',
      'PostgreSql4',
    ],
    otherTechnologies: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
    name: 'Trusted Health Consul3',
  },
  {
    link: 'https://www.google.ru/',
    description:
      'Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'Eks',
      'Grpc',
      'PostgreSql',
      'PostgreSql1',
      'PostgreSql2',
      'PostgreSql3',
      'PostgreSql4',
    ],
    otherTechnologies: ['POA', 'LibP2P', 'Python', 'Swagger', 'GCP', 'Docker'],
    name: 'Trusted Health Consul4',
  },
];

const ProjectCard: React.VFC<Project> = props => {
  const { name, description, otherTechnologies, technologies, link } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.technologies}>
        {technologies.map(technology => (
          <div key={technology} className={styles.technology}>
            {technology}
          </div>
        ))}
      </div>
      <div className={styles.otherTechnologies}>
        <span className={styles.otherTechnologiesLabel}>
          Other technologies:{' '}
        </span>
        {otherTechnologies.reduce(
          (list, technology) => `${list}, ${technology}`
        )}
      </div>
      <div>
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className={classNames(styles.link, 'purpleText')}
          >
            Open in GitHub
          </a>
        ) : (
          <span className={classNames(styles.link, 'orangeText')}>
            Currently working on
          </span>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const {
    refs: { projects: projectsRef },
  } = useScrollState();

  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const visibleProjects = useMemo(
    () => (isAllProjectsOpen ? projects : projects.slice(0, 4)),
    [isAllProjectsOpen]
  );

  return (
    <div ref={projectsRef} className={styles.root}>
      <Icon name={'lines-grid'} className={classNames('grid', 'topGrid')} />
      <div className={styles.header}>
        Our <span className='purpleText'>projects</span> and{' '}
        <span className='orangeText'>technologies</span>
      </div>
      <div className={styles.projectsList}>
        {visibleProjects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      {!isAllProjectsOpen && (
        <div
          className={styles.seeAllProjects}
          onClick={() => setIsAllProjectsOpen(true)}
        >
          See All Projects
        </div>
      )}
      <Icon name={'lines-grid'} className={classNames('grid', 'bottomGrid')} />
    </div>
  );
};

export default Projects;
