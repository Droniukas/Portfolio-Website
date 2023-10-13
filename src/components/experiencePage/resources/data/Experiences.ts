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
      longerDescription: `
      Somewhere around the middle of 2022 I decided to switch from 3D design to programming, 
      for the first few months I started by learning python - my first OOP language. 
      Throught that time I learned from online content and built some small windows applications. 
      Although I liked the language I got interested in how the web works and got into full-stack web dev. 
      From there I started learning the basics of CSS, HTML, JAVASCRIPT, JAVA and SQL and built small projects.
      `,
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
      longerDescription: `
      Here, with the team, we created a web application that won first place. 
      Here I most valuably gained experience working in a team, participating in meetings and helping other colleagues.
      I also got to participate in workshops about devOps and testing. 
      One of my favorite parts of the project that I was responsible for 
      was a real-time notification system that used WebSockets.
      The main technologies we used were React, Typescript, Java with Spring boot, PostgreSQL, jira (Agile) and git. 
      `,
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
      longerDescription: `
      Here with the team we developed a full-stack web application that also won first place! 
      Appart from the main project we also participated in team building events and multiple lectures.
      We had to work fast which led to us spending a lot of time working together.
      Here we mainly used ASP.NET, Angular and Azure DevOps. 
      `,
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
