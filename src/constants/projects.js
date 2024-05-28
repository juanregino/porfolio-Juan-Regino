import JavaScriptIcon from "../icons/icons-jsx/JavaScriptIcon.jsx";
import HtmlIcon from "../icons/icons-jsx/HtmlIcon.jsx";
import CSSIcon from "../icons/icons-jsx/CssIcon.jsx";
import ReactIcon from "../icons/icons-jsx/ReactIcon.jsx";
import JavaIcon from "../icons/icons-jsx/JavaIcon.jsx";

import TailwindIcon from "../icons/icons-jsx/TailwindIcon.jsx";
import MySqlIcon from "../icons/icons-jsx/MySqlIcon.jsx";
import NextIcon from "../icons/icons-jsx/NextIcon.jsx";
import TypeScriptIcon from "../icons/icons-jsx/TypeScriptIcon.jsx";
import MongoIcon from "../icons/icons-jsx/MongoIcon.jsx";
import PostgresIcon from "../icons/icons-jsx/PostgresIcon.jsx";
import SpringBootIcon from "../icons/icons-jsx/SpringBootIcon.jsx";

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
    class: "bg-[#00D8FF]/10 text-white ",
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
  NEXT: {
    name: "Next",
    class: "bg-[#000]/80 text-white ",
    icon: NextIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178C6]/40 text-white",
    icon: TypeScriptIcon,
  },
  MONGO: {
    name: "MongoDB",
    class: "bg-[#47A248]/40 text-white ",
    icon: MongoIcon,
  },
  POSTGRES: {
    name: "PostgreSQL",
    class: "bg-[#00D8FF]/10 text-white ",
    icon: PostgresIcon,
  },
  SPRING: {
    name: "Spring",
    class: "bg-[#539E43]/40 text-white",
    icon: SpringBootIcon,
  },
};
export const PROJECTS = [
  {
    title: "FleetNav",
    description:
      "FleetNav es una aplicación administrativa para propietarios de flotas, diseñada para gestionar vehículos y conductores de manera integral y eficiente. Utiliza WebSocket para comunicación en tiempo real mediante un chat en vivo, emplea una arquitectura multitenant para asegurar la segregación de datos y escalabilidad, y se basa en microservicios con Spring Cloud para dividir la aplicación en servicios independientes, mejorando la mantenibilidad y funcionalidad específica.",
    link: "https://github.com/juanregino/fleetNav-microservices",
    tecnologie: ["FullStack", "Destacados"],
    destacado: true,
    github: "https://github.com/juanregino/fleetNav-microservices",
    image: "project-img/fleetNav.png",
    tags: [
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,

      TAGS.TYPESCRIPT,
      TAGS.SPRING,
      TAGS.MONGO,
      TAGS.POSTGRES,
    ],
  },
  {
    title: "Shopi",
    description:
      "Tienda virtual realizada con React y Tailwind donde puedes listar productos del carrito , registro de ordenes ",
    link: "#",
    tecnologie: ["FrontEnd", "Destacados"],
    destacado: true,
    github: "#",
    image: "project-img/shopimg.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "Subastar",
    description:
      "Subasta virtual, en esta aplicacion simulamos una subastas virtual la cual cuenta con almacenamiento de datos en una base de datos real ",
    link: "",

    tecnologie: ["BackEnd"],
    github: "https://github.com/juanregino/Subastar",
    image: "project-img/subastaImg.webp",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "De Moda Outlet",
    description:
      "Simulacion de un sistema para gestionar las tiendas de el centro comercial De Moda Outlet ",
    link: "#",

    tecnologie: ["BackEnd", "Destacados"],
    destacado: true,
    github: "https://github.com/juanregino/Prueba-de-rendimiento-JAVA",
    image: "project-img/subastaImg.webp",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "Deliveloz",
    description:
      "La empresa Deliveloz está lanzando un nuevo servicio de delivery en la ciudad. Para gestionar eficientemente las órdenes de comida y la asignación de repartidores, Deliveloz necesita un sistema robusto que permita a los usuarios (clientes y repartidores) interactuar con la plataforma de manera sencilla y eficaz ",
    link: "",

    tecnologie: ["BackEnd"],
    github: "https://github.com/juanregino/Subastar",
    image: "project-img/subastaImg.webp",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "VuelaYa",
    description:
      "Aplicación en Java utilizando JDBC que permita gestionar las reservaciones de vuelos de una aerolínea. La aplicación debe permitir el manejo de aviones, vuelos, pasajeros y reservaciones. Cada vuelo estará asociado a un solo avión y puede tener múltiples pasajeros através de las reservaciones. Los pasajeros pueden tener múltiples reservaciones. ",
    link: "",

    tecnologie: ["BackEnd"],
    github: "https://github.com/juanregino/Subastar",
    image: "project-img/subastaImg.webp",
    tags: [TAGS.JAVA, TAGS.MYSQL],
  },
  {
    title: "JobFinder",
    description:
      "Aplicacion para publicar ofertas laborales en la cual podemos registrar empresas, agregar , actualizar, eliminar , filtrar y listar ofertas laborales; Esta apicacion cuanta con un sistema de verificacion, que valida si el usuario esta registrado y permite el acceso , simulando una base de datos con JSON-SERVER",
    link: "#",

    tecnologie: ["FrontEnd"],
    github: "#",
    image: "project-img/gpocket.webp",
    tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
  },
  {
    title: "Mi Terminapp",
    description:
      "Terminal de buses virtual totalmente funcional realizada con HTML y CSS, esta aplicacion es un reto demasiado interesante debido a que se realizo sin usar JavaScript ",
    link: "#",

    tecnologie: ["FrontEnd"],
    github: "https://github.com/juanregino/mi_terminapp",
    image: "project-img/mi-terminapp.webp",
    tags: [TAGS.HTML, TAGS.CSS],
  },
  {
    title: "Luxury Autohouse",
    description:
      "Simulacion de un catalogo de autos de lujo donde puedes filtrar por marca año y modelo y muchos mas filtros",
    link: "#",

    tecnologie: ["FrontEnd"],
    github: "https://github.com/juanregino/mi_terminapp",
    image: "project-img/filter-vehicles.webp",
    tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
  },
  {
    title: "Hypotestment",
    description:
      "Aplicacion para creditos hipotecarios donde los usurios pueden tener dos roles deudor,inversor y debido al role pueden ya sea hipotecar su vivienda o invertir en una viviendas",
    link: "#",

    tecnologie: ["FrontEnd"],
    github: "https://github.com/juanregino/mi_terminapp",
    image: "project-img/hypotestment.webp",
    tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
  },
];
