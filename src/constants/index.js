import {
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    eydap,
    renthome,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

 
  
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "It support engineer(Internship)",
      company_name: "Eydap",
      icon: eydap,
      iconBg: "#383E56",
      date: "11/2021 – 04/2022",
      points: [
        "Install and configure computer hardware, software, networks and applications.",
        "Respond to technical support calls from other staff members or clients and communicate how to resolve issues.",
        "Frequent communication with the developers for software troubleshooting."
      ],
    },
  ];
  
  

  
  const projects = [
    {
      name: "rent Home",
      description:
        "Web-based platform that allows users to search, rent, and buy a home in United Arab Emirates.",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
        name: "nextjs",
          color: "green-text-gradient",
        }
      ],
      image: renthome,
      source_code_link: "https://github.com/pmeliotis/real_estate_project",
    },
  ];
  
  export {  services, technologies, experiences,  projects };
