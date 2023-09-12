import React from "react";
import {Element} from "react-scroll"
import Project from "../Project/Project";

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      img: "https://wallpapercave.com/wp/wp7881177.jpg",
      title: "TodoList",
      desc: "A to-do list is a simple yet effective tool used to organize and manage tasks, activities, or goals. It helps individuals stay focused, prioritize their work, and track their progress.",
      link: "https://todoapp7890.ccbp.tech/",
    },



    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl5yqFOuyb8Bi2lvF_cyMIjkCaww_mLmbYg&usqp=CAU",
      title: "Tribute Page",
      desc: "A tribute page is a special type of webpage or document created to honor and pay tribute to a person, group, organization, or event. ",
      link: "https://appreciation.ccbp.tech/",
    },
    {
      img: "https://c0.wallpaperflare.com/preview/421/482/458/subscribe-registration-signup-software.jpg",
      title: "Event Registration Form",
      desc: "A registration form is a document or online form that individuals fill out to provide their personal information and register for a specific event, service, or membership.",
      link: "https://signedup.ccbp.tech/",
    },
    {
      img: "https://cdn.wallpapersafari.com/35/45/HWBNcK.jpg",
      title: "Build a Snake Game",
      desc: "Snake is a classic video game where players control a growing snake on a bordered playing field.",
      link: "https://asnakegame.ccbp.tech/",

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSFu7V5P5r77TJlchRZue6hd0sRP6CyqWNbf1D0n0ZLrPF6v4stiBMymFf6vBrc3c3Uo&usqp=CAU",
      title: "Food Munch",
      desc: "Food Munch is an addictive and fast-paced mobile game that challenges players to feed a hungry character by munching on an array of delicious food items.",
      link: "https://foodmunch211.ccbp.tech/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKWRRjfQnWRQlOuzdZ5RGfCjlOFh_67IBFw&usqp=CAU",
      title: "Simple Calculator",
      desc: "A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.",
      link: "https://abacus.ccbp.tech/",
    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1694540342/WhatsApp_Image_2023-09-12_at_23.02.47_p2lz06.jpg",
      title: "Food Delivery Application ",
      desc: "Food delivery apps are third-party delivery services hosted on mobile applications that restaurants or retailers partner with to showcase their menu and food offerings, allowing customers.",
      link: "https://fooddeliveryapp-2bcff.web.app/",

    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1694540757/WhatsApp_Image_2023-09-12_at_23.15.15_txae9j.jpg",
      title: "Instagram Clone ",
      desc: "Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. ",
      link: "https://instaclone80.ccbp.tech/",
    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1694540342/WhatsApp_Image_2023-09-12_at_23.05.44_k5vy9o.jpg",
      title: "Personal Transaction Application",
      desc: "Purpose of Transaction means an explanation about why a customer is conducting a transaction or the reason for which the funds will be used.",
      link: "https://personal-transaction-app.vercel.app/",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1 className="head">Projects</h1>
      <p>
        Here are some projects which I have done for making lives of people easy.Please check them below.
      </p>

      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title = {project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>

    </Element>
  );

};

export default Projects;