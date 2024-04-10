import React, { useEffect, useState } from "react";
import SpanHeader from "./SpanHeader";
import useNavState from "../hooks/useNavState";
import { useStore } from "@nanostores/react";
// import { isSelect } from "../hooks/selectStore";
import { isSelect } from "../hooks/selectStore";

const NavProjects = ({manejarSelect }) => {
  const text = ["Todos", "FullStack", "FrontEnd", "BackEnd"];

  

  return (
    <>
      <nav className="rounded-full  border border-white/10 flex justify-start items-center gap-x-4 py-2   bg-white/5 cursor-pointer" 
     
      >
        {text.map((e) => (
          <SpanHeader
            key={e}
            onClick={() => {
              
              manejarSelect(e);
              
            }}
          >
            {e}
          </SpanHeader>
        ))}
      </nav>
    </>
  );
};

export default NavProjects;
