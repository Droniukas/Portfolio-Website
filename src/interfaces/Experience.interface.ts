export interface Experience {
  id: number;
  images: string[];
  name: string;
  date: string;
  place: string;
  description: string;
  modal: {
    longerDescription: string;
  };
}
