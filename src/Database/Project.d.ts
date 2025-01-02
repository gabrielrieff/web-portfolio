export type dbProject = {
  id: number;
  title: string;
  imagens: string[];
  description: {
    resume: string;
    about: string;
    TechnologyChoices: string;
  };
  technologies: IconType[];
  links: {
    github: string;
    website?: string;
  };
};