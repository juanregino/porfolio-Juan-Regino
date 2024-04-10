import NavProjects from "./NavProjects.jsx";
import ReactIcon from "../icons/icons-jsx/ReactIcon.jsx";
import JavaIcon from "../icons/icons-jsx/JavaIcon.jsx";
import Github from "../icons/icons-jsx/Github.jsx";
import TailwindIcon from "../icons/icons-jsx/TailwindIcon.jsx";
import MySqlIcon from "../icons/icons-jsx/MySqlIcon.jsx";
import SocialPill from "../icons/icons-jsx/SocialPill.jsx";

const TAGS = {
  REACT: {
    name: "React",

    className: "bg-[#00D8FF]/15 text-white ",
    icon: ReactIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#17BAB8]/10 text-white",
    icon: TailwindIcon,
  },
  JAVA: {
    name: "Java",
    class: "bg-zinc-900 text-white",
    icon: JavaIcon,
  },
  MYSQL: {
    name: "MySql",
    class: "bg-[#00D8FF]/10 text-white ",
    icon: MySqlIcon,
  },
};
const PROJECTS = [
  {
    title: "Shopi",
    description:
      "Tienda virtual realizada con React y Tailwind donde puedes listar productos del carrito , registro de ordenes ",
    link: "#",
    tecnologie: "FrontEnd",
    github: "#",
    image: "shopimg.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "Subastando",
    description:
      "Subasta virtual, en esta aplicacion simulamos una subastas virtual la cual cuenta con almacenamiento de datos en una base de datos real ",
    link: "#",
    tecnologie: "BackEnd",
    github: "#",
    image: "subastaImg.png",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
];



import React, { Children, useState } from "react";
import useNavState from "../hooks/useNavState.jsx";
import ReactDOM from "react-dom";
const Projects = () => {
  const { select, manejarSelect } = useNavState();

 
 
  return (
    <>
      <NavProjects manejarSelect={manejarSelect}></NavProjects>
      {PROJECTS.filter((project) => project.tecnologie === select).map(
        (project) => (
          <article
            key={project.title}
            className="flex flex-col lg:flex-row  gap-x-20 gap-y-8 py-16 border-b-2  border-white/20"
          >
            
            <div className="flex flex-col gap-4 relative">
              <h3 className="font-semibold text-blue-400 text-lg">
                {project.tecnologie}
              </h3>
              <h2 className="font-bold text-3xl "> {project.title}</h2>

              <ul className="flex gap-x-2 flex-row ">
                {project.tags.map((tag) => (
              <li>
                <span
                  className={` flex items-center justify-center rounded-full gap-x-3 text-[12px] px-5 py-[3px] ${tag.className}`}
                >
                  <tag.icon key={project.title} className="size-4" />
                  {tag.name}
                </span>
              </li>
            ))}
              </ul>
              <p className="font-light text-white/75  mt-5">
                {project.description}
              </p>
              <div className="flex gap-x-3">
                <SocialPill href="linkedin.com">
              <Github className="size-6" />
              View Code
            </SocialPill>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg shadow-5xl shadow-black/10 w-62 "
                src={project.image}
                alt=""
              />
            </div>
          </article>
        )
      )}
    </>
  );
};
export default Projects;
