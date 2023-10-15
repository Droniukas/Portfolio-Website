import { Experience } from '../../../../interfaces/Experience.interface';
import selfToughtDev from '../images/self-tought/self-tought-dev.jpg';
import devbridgeAcademy from '../images/devbridge/devbridge-academy.jpg';
import devbridgeAcademy2 from '../images/devbridge/devbridge-academy-2.jpg';
import xplicityAcademy from '../images/xplicity/xplicity-academy.jpg';
import xplicityAcademy2 from '../images/xplicity/xplicity-academy-2.jpg';

export const experiences: Experience[] = [
  {
    id: 1,
    images: [selfToughtDev],
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
      From there I started learning the basics of Css, Html, Javascript, Java and Sql and built small projects.
      `,
    },
  },
  {
    id: 2,
    images: [devbridgeAcademy, devbridgeAcademy2],
    name: 'Full-stack developer academy @Devbridge',
    date: '2023 March - 2023 May',
    place: 'Kaunas, Lithuania',
    description:
      'Here I got hands-on experience working in an Agile team and built a full-stack web application with Spring boot and React.',
    modal: {
      longerDescription: `
      Here, with the team, we created a web application that won first place. 
      I gained valuable experience working in a team, participating in meetings, and helping other colleagues. 
      I also got to participate in workshops about DevOps and testing. 
      One of my favorite parts of the project I was responsible for was a real-time notification system that used a WebSocket connection. 
      The main technologies we used were React, TypeScript, Java with Spring Boot, PostgreSQL, Jira (Agile), and Git.
      `,
    },
  },
  {
    id: 3,
    images: [xplicityAcademy, xplicityAcademy2],
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
    },
  },
];
