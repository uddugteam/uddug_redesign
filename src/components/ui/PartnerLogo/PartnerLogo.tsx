import React, { FC } from 'react';

import HolygateSVG from '/public/icons/holygate.svg';
import RevittSVG from '/public/icons/revitt.svg';
import AgenteSVG from '/public/icons/agente.svg';
import ArsnlSVG from '/public/icons/arsnl.svg';
import GatewaySVG from '/public/icons/gateway.svg';
import FfconsultingSVG from '/public/icons/ffconsulting.svg';
import TrinitySVG from '/public/icons/trinity.svg';
import SnarkArtSVG from '/public/icons/snarkart.svg';
import FinalOneSVG from '/public/icons/final01.svg';

const enum PartnersIconsList {
  HOLYGATE = 'holygate',
  REVITT = 'revitt',
  AGENTE = 'agente',
  ARSNL = 'arsnl',
  GATEWAY = 'gateway',
  FFCONSULTING = 'ffconsulting',
  TRINITY = 'trinity',
  SNARKART = 'snarkart',
  FINALONE = 'finalone',
}

interface IPartnerIcons {
  [key: string]: React.ComponentType<any>;
}

const PartnerIcons: IPartnerIcons = {
  [PartnersIconsList.HOLYGATE]: HolygateSVG,
  [PartnersIconsList.REVITT]: RevittSVG,
  [PartnersIconsList.GATEWAY]: GatewaySVG,
  [PartnersIconsList.AGENTE]: AgenteSVG,
  [PartnersIconsList.ARSNL]: ArsnlSVG,
  [PartnersIconsList.FFCONSULTING]: FfconsultingSVG,
  [PartnersIconsList.TRINITY]: TrinitySVG,
  [PartnersIconsList.SNARKART]: SnarkArtSVG,
  [PartnersIconsList.FINALONE]: FinalOneSVG,
};

interface IPartnerLogoProps {
  partnerName: string;
  className?: string;
}

const PartnerLogo: FC<IPartnerLogoProps> = ({ partnerName, className }) => {
  const PartnerIconComponent = PartnerIcons[partnerName];

  if (!PartnerIconComponent) {
    return null;
  }

  return <PartnerIconComponent className={className} />;
};

export { PartnersIconsList };
export default PartnerLogo;
