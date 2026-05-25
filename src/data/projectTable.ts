interface ProjectInfo {
  name: string;
  thumbnail: string;
}

export const ProjectTable: Record<string, ProjectInfo> = {
  poob: {
    name: 'POOB vs. Zombies',
    thumbnail: '/assets/thumbnails/poob-thumbnail.png'
  },
  arsw: {
    name: 'Power Garden: Juicy Brawl!',
    thumbnail: '/assets/thumbnails/arsw-thumbnail.png'
  },
};