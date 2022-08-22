import React, { RefObject, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  Project,
  projects,
} from 'components/general/Projects/projects.constants';

import styles from './Projects.module.css';

interface ProjectLinkProps {
  link?: string | null;
}

const ProjectLink: React.VFC<ProjectLinkProps> = props => {
  const { link } = props;

  if (link === undefined) return <></>;

  if (link === null)
    return (
      <div className={classNames(styles.projectLink, 'orangeText')}>
        Currently working on
      </div>
    );

  return (
    <div className={classNames(styles.projectLink, 'purpleText')}>
      Open in GitHub
    </div>
  );
};

interface ProjectProps extends Project {
  myRef?: RefObject<any>;
}

const ProjectCard: React.VFC<ProjectProps> = props => {
  const { name, description, otherTechnologies, technologies, link, myRef } =
    props;

  const isDesktop = useScreenSize() === 'desktop';

  return (
    <div
      className={classNames(styles.card, {
        [styles.juni]: name === 'Juni::Db',
      })}
      ref={myRef}
    >
      <div className={styles.cardHeader}>{name}</div>
      <div className={styles.description}>
        {description}
        {isDesktop && <ProjectLink link={link} />}
      </div>
      <div className={styles.technologies}>
        <div className={styles.mainTechnologies}>
          {technologies.map(technology => (
            <div key={technology} className={styles.technology}>
              {technology}
            </div>
          ))}
        </div>
        {otherTechnologies && (
          <div className={styles.otherTechnologies}>
            <span className={styles.otherTechnologiesLabel}>
              Other technologies:{' '}
            </span>
            {otherTechnologies.reduce(
              (list, technology) => `${list}, ${technology}`
            )}
          </div>
        )}
      </div>
      {!isDesktop && <ProjectLink link={link} />}
      {name === 'Juni::Db' && (
        <div className={styles.badge}>
          <Icon name={'web3-badge'} height={120} />
        </div>
      )}
    </div>
  );
};

const ProjectCardWrapper: React.VFC<ProjectProps> = props => {
  const { link } = props;

  if (link)
    return (
      <a
        className={styles.cardLink}
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        <ProjectCard {...props} />
      </a>
    );

  return <ProjectCard {...props} />;
};

const Projects = () => {
  const {
    refs: { projects: projectsRef },
  } = useScrollState();
  const projectToScroll = useRef<HTMLDivElement>();
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop' || screenSize === 'tablet-landscape';

  const visibleProjects = useMemo(
    () => (isAllProjectsOpen ? projects : projects.slice(0, 4)),
    [isAllProjectsOpen]
  );

  const handleProjectsVisibilityButtonClick = () => {
    if (isAllProjectsOpen) {
      projectToScroll.current?.scrollIntoView();
    }
    setIsAllProjectsOpen(!isAllProjectsOpen);
  };

  return (
    <div ref={projectsRef} className={styles.root}>
      <Icon name={'lines-grid'} className={classNames('grid', 'topGrid')} />
      <div className={styles.header}>
        Our <span className='purpleText'>projects</span> and{' '}
        <span className='orangeText'>technologies</span>
      </div>
      <div className={styles.projectsList}>
        {visibleProjects.map((project, index) => (
          <ProjectCardWrapper
            key={project.name}
            {...project}
            myRef={index === 3 ? projectToScroll : undefined}
          />
        ))}
        <div className='backgroundLinesWrapper'>
          <Icon
            name={isWide ? 'background-lines' : 'mobile-background-lines'}
            className='backgroundLines'
          />
        </div>
      </div>
      <div
        className={styles.projectsVisibilityButton}
        onClick={handleProjectsVisibilityButtonClick}
      >
        {isAllProjectsOpen ? 'Roll Up' : 'See All Projects'}
      </div>
    </div>
  );
};

export default Projects;
