import NavProjects from "./NavProjects.jsx";

import SocialPill from "../icons/icons-jsx/SocialPill.jsx";

import Github from "../icons/icons-jsx/Github.jsx";

import useNavState from "../hooks/useNavState.jsx";

import { PROJECTS } from "../constants/projects.js";
const Projects = () => {
  const { select, handleSelect } = useNavState();

  return (
    <>
      <NavProjects handleSelect={handleSelect}></NavProjects>

      {PROJECTS.filter(
        (project) => project.tecnologie === select || project.destacado == true
      ).map((project) => (
        <article
          key={project.title}
          className="flex flex-col lg:flex-row  justify-center items-center gap-x-20 gap-y-8 pt-16 px-8 pb-7 border-b-2  border-white/20 md:w-[1000px]"
        >
          <div className="flex flex-col gap-4 relative text-wrap w-full  md:px-0 md:w-[40%]">
            <h3 className="font-semibold text-yellow-400 text-md">
              {project.tecnologie}
            </h3>
            <h2 className="font-bold text-3xl "> {project.title}</h2>

            <ul className="flex gap-x-2 flex-row ">
              {project.tags.map((tag) => (
                <li>
                  <span
                    className={` flex items-center justify-center rounded-full gap-x-3 text-[12px] px-5 py-[3px] ${tag.class}`}
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
            <div className="flex gap-x-3 mt-4">
              <SocialPill href="linkedin.com">
                <Github className="size-6" />
                View Code
              </SocialPill>
            </div>
          </div>
          <div className="flex items-center justify-center w-full   md:w-[45%] h-[300px]  bg-gray-700/50 overflow-hidden rounded-lg ">
            <img
              className="rounded-lg  shadow-5xl shadow-black/10 size-full transform translate-x-10 translate-y-12 hover:translate-x-6 hover:translate-y-6 duration-700"
              src={project.image}
              alt=""
            />
          </div>
        </article>
      ))}
    </>
  );
};
export default Projects;
