import { ExperienceImage } from './ExperienceImage.interface';

export interface Experience {
  id: number;
  images: ExperienceImage[];
  name: string;
  date: string;
  place: string;
  description: string;
  modal: {
    longerDescription: string;
  };
}
