import type { StaticImageData } from 'next/image';

import poobThumbnail from '../../public/assets/thumbnails/poob-thumbnail.png';
import arswThumbnail from '../../public/assets/thumbnails/arsw-thumbnail.png';
import hautThumbnail from '../../public/assets/thumbnails/haut-thumbnail.png';
import prometeoThumbnail from '../../public/assets/thumbnails/prometeo-thumbnail.png';
import smartripThumbnail from '../../public/assets/thumbnails/smartrip-thumbnail.png';
import elysiumThumbnail from '../../public/assets/thumbnails/elysium-thumbnail.png';
import talentmapThumbnail from '../../public/assets/thumbnails/ptia-thumbnail.png';
import ezflixThumbnail from '../../public/assets/thumbnails/mbda-thumbnail.png';
import qifyThumbnail from '../../public/assets/thumbnails/qify-thumbnail.png';

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
  haut: {
    name: 'AI Grading Automation Workflows Backup',
    thumbnail: hautThumbnail,
  },
  prometeo: {
    name: 'Prometeo - Smart Gym Management System',
    thumbnail: prometeoThumbnail,
  },
  smartrip: {
    name: 'SmarTrip - AI-Powered Multi-Platform Tourism Ecosystem',
    thumbnail: smartripThumbnail,
  },
  elysium: {
    name: 'Elysium - Laboratory Reservation System',
    thumbnail: elysiumThumbnail,
  },
  talentmap: {
    name: 'TalentMap AI',
    thumbnail: talentmapThumbnail,
  },
  ezflix: {
    name: 'EZFlix - Relational Database System',
    thumbnail: ezflixThumbnail,
  },
  qify: {
    name: 'Qify - Quality Attribute DSL',
    thumbnail: qifyThumbnail,
  },
};