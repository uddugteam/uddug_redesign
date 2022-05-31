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
  link?: string | null;
}

const projects: Project[] = [
  {
    link: null,
    description:
      'Platform performs real-time medical data deep analisis and automate decisions using machine learning algoritms. System empowers patients, providers, and payers delivering a highly connected, seamless experience along every step in the care journey. Peer-to-peer database architecture provides secure and anonymous data.',
    technologies: [
      'Rust',
      'Substrate',
      'Polkadot',
      'IPFS',
      'GKE',
      'Healthcare.ai',
      'React',
      'Terraform',
    ],
    otherTechnologies: [
      'LibP2P',
      'POA',
      'Python',
      'Swagger',
      'Kubernetes',
      'GCP',
      'Docker',
    ],
    name: 'Health Consul',
  },
  {
    link: 'https://github.com/uddugteam/juniDB',
    description:
      "Substrate pallet provides a configurable database module with allowance to store and  manipulate a big amount of data. It's a very highload action to store large amounts of data on-chain. The most-common and useful solution for decentralised apps is to use IPFS as a data storage and store on-chain only hashes. Our team inspired by the OrbitDB focuses on the scalability, decentralised, easy-learning solution for Substrat developers. that want to manipulate big amounts of data easily. Available storage data types: key-value and hash.",
    technologies: ['Rust', 'Substrate', 'Offchain::ipfs', 'IPFS'],
    otherTechnologies: ['[ecies-ed25519]'],
    name: 'Juni::Db',
  },
  {
    link: 'https://www.kickstox.com/',
    description:
      'Football trading game. The platform aims to become the online reference point for football fans and allows you to trade your favourite players from your favourite football teams, analize stats (in real time), and challenge your friends.',
    technologies: [
      'Go',
      'PostgreSql',
      'RabbitMq',
      'GKE',
      'Terraform',
      'React',
      'MQTT',
    ],
    otherTechnologies: [
      'Microservices',
      'Nats',
      'Redis',
      'Kubernetes',
      'GCP',
      'Swagger',
      'Docker',
      'GRPC',
      'Ansible',
    ],
    name: 'Kickstox',
  },
  {
    link: 'https://snark.art/',
    description:
      'Snark.art uses the power of blockchain as a creative media to change the way art is made and collected.',
    technologies: [
      'Go',
      'Ethereum',
      'Solidity',
      'Nats',
      'GRPC',
      'PostgreSql',
      'Swagger',
      'React',
      'EKS',
    ],
    otherTechnologies: [
      'Node.js',
      'Microservices',
      'Redis',
      'AWS',
      'Kubernetes',
      'S3',
      'Docker',
      'Next.js',
      'Web3.js',
      'Angular2',
      'stripe',
      'ffmpeg',
    ],
    name: 'Snark.art',
  },
  {
    link: 'https://zam.io/',
    description:
      'Digital bank realises international money transfers based on blockchain technology with a hybrid billing architecture, includes exchange (fiat/digytal currency) and credit cards services.',
    technologies: [
      'Go',
      'Stellar',
      'Ethereum',
      'Bitcoin',
      'GRPC',
      'PostgreSql',
      'Vue.js',
      'Swift',
      'Kotlin',
    ],
    otherTechnologies: [
      'Redis',
      'Kubernetes',
      'Microservices',
      'Nats',
      'Docker',
      'Nuxt.js',
      'MVVC',
      'Viper',
    ],
    name: 'Zam Zam',
  },
  {
    link: 'https://github.com/icexch',
    description:
      'Cryptocurrency exchange with various trading sectors and opportunity to be a company sub-broker. Platform properly includes a group of site-projects to create a full-fledged financial ecosystem including: wallets, funds, indicative tools, analytical center, trading core.',
    technologies: [
      'C++',
      'Go',
      'PHP',
      'Laravel',
      'Ethereum',
      'Solidity',
      'Bitcoin',
      'Vue.js',
      'HighCharts',
      'Redis',
    ],
    otherTechnologies: [
      'PostgreSql',
      'Docker',
      'Nuxt.js',
      'Litecoin',
      'Ripple',
      'Stellar',
      'Monero',
      'Dash',
      'Dogecoin',
      'lota',
      'Cardano',
    ],
    name: 'Icex',
  },
  {
    link: 'https://ogcrystals.com/',
    description:
      'OG:CR transforms static NFTs into a flourishing digital reefscape, where each uniquely individual piece of digital art grows every time it is re-sold.  All 10,301 OG:Crystals is a direct reflection of both their owner and future transactional  history, creating a visual record of combined digital and organic processes.  Like the living architecture formed by the exo-skeletons of coral polyps, past, present and future coexist, offering a new take on NFTs, value, and the creative process.',
    technologies: ['Go', 'Solidity', 'IPFS', 'aws S3', 'k8s'],
    otherTechnologies: [
      'Docker',
      'GCP',
      'PostgreSql',
      'Redis',
      'websockets',
      'Swagger',
    ],
    name: 'OG Crystals',
  },
  {
    link: null,
    description:
      'Mobile messenger applications iOS/Android for the scientific community, developed for government agencies. A feature here is the interaction with an exclusive object-relational database management system for general and special purposes with extended functionality through the use of plug-in modules.',
    technologies: ['Node.js', 'Kotlin', 'Swift'],
    otherTechnologies: ['OpenAPI', 'websockets', 'Docker', 'docker-compose'],
    name: 'Naukotheca',
  },
  {
    description:
      'RTB ad network allows publishers to place promotional materials on the advertisers channels and to pay with cryptocurrencies, also via credit cards services.',
    technologies: ['PHP', 'Laravel', 'Bitcoin', 'JavaScript', 'Redis'],
    otherTechnologies: ['Jquery', 'Mysql', 'D3.js'],
    name: 'Your Ads Media',
  },
  {
    description:
      'Platform allows to create unlinited amount of crypto-faucets and to receive passive income, or allows to invest and interact with other faucets. System based on micro payments (x4 coins). 2014 award - the world top 10 faucets.',
    technologies: ['PHP', 'Laravel', 'Bitcoin', 'JavaScript', 'Redis'],
    otherTechnologies: ['Jquery', 'Mysql', 'Litecoin', 'Dogecoin'],
    name: 'Your Ads Media',
  },
  {
    description:
      'Business processes optimisation for all divisions within the ininternational company working with rum distribution (e-commerce, promotional, loyalty, accounting, stock, control and security).',
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript'],
    otherTechnologies: ['Jquery', 'Symphony', 'Redis'],
    name: 'Rum boutique',
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
      {link !== undefined && (
        <div>
          {link ? (
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              className={classNames(styles.link, 'purpleText')}
            >
              Open
            </a>
          ) : (
            <span className={classNames(styles.link, 'orangeText')}>
              Currently working on
            </span>
          )}
        </div>
      )}
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
