import { ModalBottomButton } from './ModalBottomButton.interface';

export interface Experience {
  image: string;
  name: string;
  date: string;
  place: string;
  description: string;
  modal: {
    longerDescription: string;
    photos?: string[]; // this shouldn't be optional\
    rightBottomButton?: ModalBottomButton;
    leftBottomButton?: ModalBottomButton;
  };
}
