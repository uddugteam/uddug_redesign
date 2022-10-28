export interface Project {
  name: string;
  description: string;
  technologies: string[];
  otherTechnologies?: string[];
  link?: string | null;
}

export const projects: Project[] = [
  {
    link: null,
    description:
      'Secured decentralized hosting service for opensource software development projects.',
    technologies: [
      'Rust',
      'Filecoin',
      'Solidity',
      'Wasm',
      'IPFS',
      'LibP2P',
      'React.js',
      'next.js',
      'Go',
      'Blake2B',
      'Argon2',
    ],
    name: 'GitSec',
  },
  {
    link: null,
    description:
      'Substrate pallet provides a configurable database module allows to store and manipulate a big amount of data. Pallet works as an offchain worker and connect data btwn blockchain and uses ipfs as a data storage and store on-chain only hashes.',
    technologies: ['Rust', 'Substrate', 'Offchain::ipfs', 'IPFS'],
    otherTechnologies: ['[ecies-ed25519]'],
    name: 'Juni::Db',
  },
  {
    link: 'https://snark.art/',
    description:
      'NFT marketplace. Snark.art uses the power of blockchain as a creative media to change the way art is made and collected.',
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
    description:
      'Health Consul implements medical tests decoding with issuing recommendations for the indicators obtained. Decentralized service focuses on anonymizing and depersonalizing user data (EHR). These accounts validate transactions through the interaction with Ml models via the built-in ML mechanisms, and subsequently produce predictions for certain conditions. If the user has given consent to a further data processing, machines will be retrained.',
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
    link: null,
    description:
      'Cross-chain open-source Oracle protocol is an infrastructure service usable to operate decentralized Information assets. Based on a set of smart contracts, the Quasar Dust’ algorithm optimizes on-chain data acquisition and provides the beneficiary with qualified indicative data at exceptional speed.',
    technologies: [
      'Rust',
      'websockets',
      'nosql',
      'react.js',
      'next.js',
      'solana',
      'near',
      'ethereum',
      'solidity',
      'wasm',
    ],
    name: 'Quasar',
  },
  {
    link: 'https://ogcrystals.com/',
    description:
      'OG:CR transforms static NFTs into a flourishing digital reefscape, where each uniquely individual piece of digital art grows every time it is re-sold.  All 10,301 OG:Crystals is a direct reflection of both their owner and future transactional history, creating a visual record of combined digital and organic processes.',
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
    link: 'https://naukotheka.ru/login',
    description:
      'Mobile messenger applications iOS/Android for the scientific community. Developed for government agencies.',
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
    name: 'Cryptozaur',
  },
  {
    description:
      'Business processes optimisation for all divisions within the ininternational company working with rum distribution (e-commerce, promotional, loyalty, accounting, stock, control and security).',
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript'],
    otherTechnologies: ['Jquery', 'Symphony', 'Redis'],
    name: 'Rum boutique',
  },
];