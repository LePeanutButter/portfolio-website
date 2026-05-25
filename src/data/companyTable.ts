import type { StaticImageData } from 'next/image';

import crehanaLogo from '../../public/assets/logos/crehana.png';
import oxfordLogo from '../../public/assets/logos/oxford-placement.png';
import toeflLogo from '../../public/assets/logos/toefl-junior.png';
import sprachLogo from '../../public/assets/logos/sprach-institut.png';
import eciLogo from '../../public/assets/logos/eci.png';
import orbidiLogo from '../../public/assets/logos/orbidi.png';

interface CompanyInfo {
  name: string;
  logo: StaticImageData;
}

export const CompanyTable: Record<string, CompanyInfo> = {
  crehana: {
    name: 'Crehana',
    logo: crehanaLogo,
  },
  oxford: {
    name: 'Oxford Placement Test',
    logo: oxfordLogo,
  },
  toefl: {
    name: 'TOEFL Junior',
    logo: toeflLogo,
  },
  sprach: {
    name: 'Sprach Institut',
    logo: sprachLogo,
  },
  eci: {
    name: 'Escuela Colombiana de Ingenieria Julio Garavito',
    logo: eciLogo,
  },
  orbidi: {
    name: 'ORBIDI',
    logo: orbidiLogo,
  },
};