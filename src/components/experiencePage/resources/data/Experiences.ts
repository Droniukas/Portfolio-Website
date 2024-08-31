import { Experience } from '../../../../interfaces/Experience.interface';
import devbridgeAcademy from '../images/devbridge/devbridge-academy.jpg';
import devbridgeAcademy2 from '../images/devbridge/devbridge-academy-2.jpg';
import xplicityAcademy from '../images/xplicity/xplicity-academy.jpg';
import xplicityAcademySmall from '../images/xplicity/xplicity-academy-small.jpg';
import xplicityAcademy2 from '../images/xplicity/xplicity-academy-2.jpg';
import devbridgeAcademySmall from '../images/devbridge/devbridge-academy-small.jpg';
import groupOfficePhotoIntus from '../images/intus/group-office-phoyo.png'
import presentationIntus from '../images/intus/presentation.jpg'


export const experiences: Experience[] = [
  {
    id: 1,
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
    date: 'from Dec 2023',
    place: 'Remote/Šiauliai lithuania',
    description:
      "This is where I started my proffesional career. Here I've worked on multiple projects, and met lot's of cool people.",
    modal: {
      longerDescription: `
        Intus Windows is one of the main window manufacturers in the USA that has an office/factory in Lithuania. 
        Here I worked on a large range of different projects, had to work with many different teams and departments of the company, met lots of people, and learned a lot about other systems. 
        I'm very thankful for my manager who put me on different projects, not only letting me work with different teams but also letting me develop an application where I was the only developer from start to finish. 
        The general technologies I worked with were mainly React, Angular, and .Net/C#. Overall the company had a great culture, and people were great fun to work with.`,
    },
  },
  {
    id: 2,
    images: [
      { image: devbridgeAcademy, smallImage: devbridgeAcademySmall },
      { image: devbridgeAcademy2 },
    ],
    name: 'Devbridge Full-stack Developer Academy',
    date: '2023 March - 2023 May',
    place: 'Kaunas, Lithuania',
    description:
      'Here me and the team built a full-stack web application with Spring and React in 3 months.',
    modal: {
      longerDescription: `
      Here, me and other aspiring developers created a web application that won first place. 
      Throught the academy we worked together trying to succesfully create a the application in our 3 month deadline. 
      I also got to participate in workshops about DevOps and testing. 
      One of my favorite parts of the project I was responsible for was a real-time notification system that used a WebSocket connection. 
      The main technologies we used were React, Java with Spring.
      `,
    },
  },
  {
    id: 3,
    images: [
      { image: xplicityAcademy, smallImage: xplicityAcademySmall },
      { image: xplicityAcademy2 },
    ],
    name: 'Xplicity Full-stack Developer Academy',
    date: '2023 August',
    place: 'Kaunas, Lithuania',
    description: 'Here we developed a full-stack web application with Angular and .NET.',
    modal: {
      longerDescription: `
      Here with the team, we developed a full-stack web application that also won first place! 
      Apart from the main project we also participated in team-building events and multiple lectures. 
      We had to work fast which led to us spending a lot of time working together. 
      Here we mainly used .NET/C#, Angular and Azure DevOps.
      `,
    },
  },
];
