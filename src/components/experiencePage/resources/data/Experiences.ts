import { Experience } from '../../../../interfaces/Experience.interface';
import devbridgeAcademy from '../images/devbridge/devbridge-academy.jpg';
import devbridgeAcademy2 from '../images/devbridge/devbridge-academy-2.jpg';
import xplicityAcademy from '../images/xplicity/xplicity-academy.jpg';
import xplicityAcademySmall from '../images/xplicity/xplicity-academy-small.jpg';
import xplicityAcademy2 from '../images/xplicity/xplicity-academy-2.jpg';
import devbridgeAcademySmall from '../images/devbridge/devbridge-academy-small.jpg';
import groupOfficePhotoIntus from '../images/intus/group-office-phoyo.png'
import presentationIntus from '../images/intus/presentation.jpg'
import pinkingWorkshop from '../images/pinking-workshop.jpg';
import army from '../images/army.jpeg';
import visualizationExample from '../images/visualization-example.jpeg';


export const experiences: Experience[] = [
  {
    id: 1,
    images: [{ image: pinkingWorkshop, smallImage: pinkingWorkshop }],
    name: 'Sales at Southwestern Advantage',
    date: 'Dec 2025 - May 2026',
    place: 'Lithuania',
    description:
      'I learned sales and worked in stores for Save the Children, talking to people about the organization.',
    modal: {
      longerDescription: `
        From December 2025 to May 2026 I practiced sales with salespeople from the U.S. and Lithuania.
        I worked at Save the Children, often about 10 hours a day in stores, telling people about the organization and how they can help children.
      `,
    },
  },
  {
    id: 2,
    images: [{ image: army, smallImage: army }],
    name: 'Service in the Lithuanian military',
    date: 'Dec 2024 - Sep 2025',
    place: 'Lithuania',
    description:
      'I served in the Lithuanian military and finished with a good evaluation.',
    modal: {
      longerDescription: `
        I served from December 2024 to September 2025.
        The days followed a strict schedule, starting with an early morning and exercise.
        During field exercises I spent several days outside, whatever the weather.
        I worked with a team on shared tasks, and I finished with a good evaluation.
      `,
    },
  },
  {
    id: 3,
    images: [
      {
        image: presentationIntus,
        smallImage: presentationIntus,
      },
      {
        image: groupOfficePhotoIntus,
      }
    ],
    name: 'Software developer at Intus Windows',
    date: 'Dec 2023 - present',
    place: 'Remote/Šiauliai, Lithuania',
    description:
      'I work with my team on the company applications. We help each other solve problems.',
    modal: {
      longerDescription: `
        Intus Windows is a U.S. window company with an office in Lithuania.
        I have worked here since December 2023. Before this job I taught myself programming for a year and did two developer academies.
        Day to day I work with a team, and we help each other solve problems.`,
    },
  },
  {
    id: 4,
    images: [
      { image: xplicityAcademy, smallImage: xplicityAcademySmall },
      { image: xplicityAcademy2 },
    ],
    name: 'Xplicity Full-stack Developer Academy',
    date: 'August 2023',
    place: 'Kaunas, Lithuania',
    description:
      'With a team we built an application, presented it, and won first place.',
    modal: {
      longerDescription: `
      This was a developer academy at Xplicity in August 2023.
      We built an application, presented it, and won first place.
      We used Angular and .NET.
      `,
    },
  },
  {
    id: 5,
    images: [
      { image: devbridgeAcademy, smallImage: devbridgeAcademySmall },
      { image: devbridgeAcademy2 },
    ],
    name: 'Devbridge Full-stack Developer Academy',
    date: 'March 2023 - May 2023',
    place: 'Kaunas, Lithuania',
    description: 'With a team we built an application and won first place.',
    modal: {
      longerDescription: `
        This was a developer academy at Devbridge (Cognizant), from March to May 2023.
        We built an application as a team and won first place.
        We used React and Java with Spring.
      `,
    },
  },
  {
    id: 6,
    images: [{ image: visualizationExample, smallImage: visualizationExample }],
    name: 'Domas Projects',
    date: 'Sep 2021 - Dec 2022',
    place: 'Šiauliai, Lithuania',
    description:
      'I ran a small business making real estate visualizations from architectural drawings.',
    modal: {
      longerDescription: `
        From September 2021 to December 2022 I ran Domas Projects on my own.
        I made virtual visualizations of real estate from architectural drawings for clients I found online.
        I talked with them about what they needed and managed each project from start to finish.
      `,
    },
  },
];
