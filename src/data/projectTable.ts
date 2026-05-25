import type { StaticImageData } from 'next/image';

import poobThumbnail from '../../public/assets/thumbnails/poob-thumbnail.png';
import arswThumbnail from '../../public/assets/thumbnails/arsw-thumbnail.png';

interface ProjectInfo {
  name: string;
  thumbnail: StaticImageData;
}

export const ProjectTable: Record<string, ProjectInfo> = {
  poob: {
    name: 'POOB vs. Zombies',
    thumbnail: poobThumbnail,
  },
  arsw: {
    name: 'Power Garden: Juicy Brawl!',
    thumbnail: arswThumbnail,
  },
};