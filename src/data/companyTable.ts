interface CompanyInfo {
  name: string;
  logo: string;
}

export const CompanyTable: Record<string, CompanyInfo> = {
  crehana: {
    name: 'Crehana',
    logo: '/assets/logos/crehana.png'
  },
  oxford: {
    name: 'Oxford Placement Test',
    logo: '/assets/logos/oxford-placement.png'
  },
  toefl: {
    name: 'TOEFL Junior',
    logo: '/assets/logos/toefl-junior.png'
  },
  sprach: {
    name: 'Sprach Institut',
    logo: '/assets/logos/sprach-institut.png'
  },
  eci: {
    name: 'Escuela Colombiana de Ingenieria Julio Garavito',
    logo: '/assets/logos/eci.png'
  },
  orbidi: {
    name: 'ORBIDI',
    logo: '/assets/logos/orbidi.png'
  },
};