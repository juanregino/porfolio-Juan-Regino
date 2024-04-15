import JavaScriptIcon from "../icons/icons-jsx/JavaScriptIcon.jsx";
import HtmlIcon from "../icons/icons-jsx/HtmlIcon.jsx";
import CSSIcon from "../icons/icons-jsx/CssIcon.jsx";
import ReactIcon from "../icons/icons-jsx/ReactIcon.jsx";
import JavaIcon from "../icons/icons-jsx/JavaIcon.jsx";

import TailwindIcon from "../icons/icons-jsx/TailwindIcon.jsx";
import MySqlIcon from "../icons/icons-jsx/MySqlIcon.jsx";

export const TAGS = {
  REACT: {
    name: "React",

    class: "bg-[#00D8FF]/40 text-white ",
    icon: ReactIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#17BAB8]/40 text-white",
    icon: TailwindIcon,
  },
  JAVA: {
    name: "Java",
    class: "bg-zinc-900 text-white",
    icon: JavaIcon,
  },
  MYSQL: {
    name: "MySql",
    class: "bg-[#00D8FF]/50 text-white ",
    icon: MySqlIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",

    class: "bg-[#dcc94b]/50 text-white ",
    icon: JavaScriptIcon,
  },
  HTML: {
    name: "Html",
    class: "bg-[#db5d29]/40 text-white",
    icon: HtmlIcon,
  },
  CSS: {
    name: "Css",
    class: "bg-[#309ecc]/40 text-white",
    icon: CSSIcon,
  },
};
export const PROJECTS = [
  {
    title: "Shopi",
    description:
      "Tienda virtual realizada con React y Tailwind donde puedes listar productos del carrito , registro de ordenes ",
    link: "#",
    tecnologie: "FrontEnd",
    destacado: true,
    github: "#",
    image: "project-img/shopimg.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "Subastando",
    description:
      "Subasta virtual, en esta aplicacion simulamos una subastas virtual la cual cuenta con almacenamiento de datos en una base de datos real ",
    link: "#",

    tecnologie: "BackEnd",
    github: "#",
    image: "project-img/subastaImg.png",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "De Moda Outlet",
    description:
      "Simulacion de un sistema para gestionar las tiendas de el centro comercial De Moda Outlet ",
    link: "#",

    tecnologie: "BackEnd",
    destacado: true,
    github: "#",
    image: "project-img/subastaImg.png",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "JobFinder",
    description:
      "Aplicacion para publicar ofertas laborales en la cual podemos registrar empresas, agregar , actualizar, eliminar , filtrar y listar ofertas laborales; Esta apicacion cuanta con un sistema de verificacion, que valida si el usuario esta registrado y permite el acceso , simulando una base de datos con JSON-SERVER",
    link: "#",

    tecnologie: "FrontEnd",
    github: "#",
    image: "project-img/gpocket.png",
    tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
  },
];
