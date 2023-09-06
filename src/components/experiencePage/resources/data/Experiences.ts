import { Experience } from '../../../../interfaces/Experience.interface';
// import experience1 from '../images/experience-1.png';
import selfToughtDev from '../images/self-tought-dev.jpg';
import devbridgeAcademy from '../images/devbridge-academy.jpg';
import xplicityAcademy from '../images/xplicity-academy.jpg';

export const experiences: Experience[] = [
  // {
  //   image: experience1,
  //   name: 'Visualizations and design',
  //   date: '2021-22',
  //   place: 'Šiauliai, Lithuania',
  //   description:
  //     'I made 3D visualizations for real-estate clients using compupter software.',
  //   modal: {
  //     longerDescription:
  //       'vizualizations vizualizations vizualizations vizualizations vizualizations' +
  //       'vizualizations vizualizations vizualizations vizualizations' +
  //       ' vizualizations vizualizations vizualizations vizualizations vizualizations ' +
  //       'vizualizations vizualizations vizualizations vizualizations vizualizations' +
  //       'vizualizations vizualizations vizualizations vizualizations' +
  //       ' vizualizations vizualizations vizualizations vizualizations vizualizations ',
  //   },
  // },
  {
    image: selfToughtDev,
    name: 'Self-tought programmer',
    date: 'from 2022',
    place: 'Šiauliai, Lithuania',
    description:
      'I started on my self-thought path by taking online courses and building small projects.',
    modal: {
      longerDescription:
        'programmer programmer programmer programmer programmer programmer programmer programmer ' +
        'programmer programmer programmer programmer programmer programmer programmer programmer ' +
        'programmer programmer programmer programmer programmer programmer programmer programmer ' +
        'programmer programmer programmer programmer programmer programmer programmer programmer ' +
        'programmer programmer programmer programmer programmer programmer programmer programmer ' +
        ' programmer programmer programmer programmer programmer programmer programmer programmer ',
    },
  },
  {
    image: devbridgeAcademy,
    name: 'Full-stack developer academy @Devbridge',
    date: '2023 March - 2023 May',
    place: 'Kaunas, Lithuania',
    description:
      'Here I got hands-on experience working in an Agile team and built a full-stack web application with Spring boot and React.',
    modal: {
      longerDescription:
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        '  @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        ' @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge' +
        '  @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge @Devbridge',

      leftBottomButton: {
        name: 'Something',
        smallerText: 'More',
      },
      rightBottomButton: {
        name: 'Something',
        smallerText: 'More',
      },
    },
  },
  {
    image: xplicityAcademy,
    name: 'Xplicity Full-stack developer academy',
    date: '2023 August',
    place: 'Kaunas, Lithuania',
    description: 'Here we developed a full-stack web application with Angular and .NET.',
    modal: {
      longerDescription: '',
      leftBottomButton: {
        name: 'Something',
        smallerText: 'More',
      },
      rightBottomButton: {
        name: 'Something',
        smallerText: 'More',
      },
    },
  },
];
