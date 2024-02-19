import { motion } from 'framer-motion';
import React, { FC, RefObject, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import ProjectBadgeWEB3 from '/public/icons/project-badge-web3.svg';
import ArrowSVG from '/public/icons/arrow.svg';

import Title, { TitleSizes } from 'components/ui/Title';
import BackgroundCircle from 'components/ui/BackgroundCircle';
import Wrapper from 'components/layout/Wrapper';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  Project,
  projects,
} from 'components/general/Projects/projects.constants';
import Button from 'components/ui/Button/';
import PartnerLogo, { PartnersIconsList } from 'components/ui/PartnerLogo';

import styles from './Projects.module.css';

interface ProjectLinkProps {
  link?: string | null;
}

const ProjectLink: React.VFC<ProjectLinkProps> = props => {
  const { link } = props;

  if (link === undefined) return <></>;

  if (link === null)
    return (
      <div className={classNames(styles.projectLink, 'accentSecondaryText')}>
        Currently working on
      </div>
    );

  return (
    <div className={classNames(styles.projectLink, 'accentPrimaryText')}>
      Finished project
    </div>
  );
};

interface ProjectProps extends Project {
  myRef?: RefObject<any>;
}

const ProjectCard: React.VFC<ProjectProps> = props => {
  const {
    name,
    description,
    otherTechnologies,
    technologies,
    link,
    partner,
    myRef,
  } = props;
  const isDesktop = useScreenSize() === 'desktop';

  return (
    <motion.div
      className={classNames(styles.card, {
        [styles.juni]: name === 'Juni::Db',
      })}
      ref={myRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
      {partner ? (
        <PartnerLogo
          partnerName={PartnersIconsList.GATEWAY}
          className={styles.partner}
        />
      ) : null}
      {!isDesktop && <ProjectLink link={link} />}
      {name === 'Juni::Db' && (
        <div className={styles.badge}>
          <ProjectBadgeWEB3 className={styles.badgeLogo} />
        </div>
      )}
      <ArrowSVG className={styles.arrow} />
    </motion.div>
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

const Projects: FC = () => {
  const projectToScroll = useRef<HTMLDivElement>();
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const screenSize = useScreenSize();
  const isWide = screenSize === 'desktop' || screenSize === 'tablet-landscape';

  const visibleProjects = useMemo(
    () =>
      isAllProjectsOpen
        ? projects
        : isWide
        ? projects.slice(0, 4)
        : projects.slice(0, 2),
    [isAllProjectsOpen, isWide]
  );

  const handleProjectsVisibilityButtonClick = () => {
    if (isAllProjectsOpen) {
      projectToScroll.current?.scrollIntoView();
    }
    setIsAllProjectsOpen(!isAllProjectsOpen);
  };

  return (
    <section className={styles.root} id='projects'>
      <Wrapper>
        <div className={styles.inner}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Title size={TitleSizes.MEDIUM}>
              Our projects and technologies
            </Title>
          </motion.div>
          <div className={styles.projectsList}>
            {visibleProjects.map((project, index) => (
              <ProjectCardWrapper
                key={project.name}
                {...project}
                myRef={index === 3 ? projectToScroll : undefined}
              />
            ))}
          </div>
          <Button
            className={styles.projectsVisibilityButton}
            onClick={handleProjectsVisibilityButtonClick}
          >
            {isAllProjectsOpen ? 'Roll Up' : 'See All Projects'}
          </Button>
          <BackgroundCircle className={styles.BackgroundCircle} />
        </div>
      </Wrapper>
    </section>
  );
};

export default React.memo(Projects);
