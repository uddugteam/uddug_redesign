import React, { FC } from 'react';
// eslint-disable-next-line
import classNames from 'classnames';
// eslint-disable-next-line
import LinkedinSVG from 'public/icons/linkedIn.svg';
import DiscrodSVG from 'public/icons/discord.svg';
import FacebookSVG from 'public/icons/facebook.svg';
import GithubSVG from 'public/icons/github.svg';
import MediumSVG from 'public/icons/medium.svg';
import TwitterSVG from 'public/icons/twitter.svg';

import styles from './Socials.module.css';

const enum SocialIcons {
  DISCORD = 'discord',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  MEDIUM = 'medium',
  TWITTER = 'TWITTER',
}

interface ISocialIcons {
  [key: string]: React.ReactNode;
}

const icons: ISocialIcons = {
  [SocialIcons.DISCORD]: <DiscrodSVG className={styles.icon} />,
  [SocialIcons.FACEBOOK]: <FacebookSVG className={styles.icon} />,
  [SocialIcons.GITHUB]: <GithubSVG className={styles.icon} />,
  [SocialIcons.LINKEDIN]: <LinkedinSVG className={styles.icon} />,
  [SocialIcons.MEDIUM]: <MediumSVG className={styles.icon} />,
  [SocialIcons.TWITTER]: <TwitterSVG className={styles.icon} />,
};

interface ISocialsProps {
  socialItems: {
    icon: string;
    link: string;
  }[];
  className?: string;
}

const Socials: FC<ISocialsProps> = ({ socialItems, className }) => {
  const socialsClassnames = classNames(className, styles.socials);

  return (
    <ul className={socialsClassnames}>
      {socialItems &&
        socialItems.length &&
        socialItems.map((item, index) => (
          <li key={item.link + index}>
            <a className={styles.link} href={item.link} target='blank'>
              {icons[item.icon]}
            </a>
          </li>
        ))}
    </ul>
  );
};

export { SocialIcons };
export default Socials;
