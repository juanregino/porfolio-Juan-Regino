import React, { useEffect, useState } from "react";
import SpanHeader from "./SpanHeader";
import useNavState from "../hooks/useNavState";
import { useStore } from "@nanostores/react";
import { isSelect } from "../hooks/selectStore";

const NavProjects = ({ selected }) => {
  const text = ["Todos", "FullStack", "FrontEnd", "BackEnd"];

  //  const $isSelect = useuseNavStateStore()
  const { setSelect } = useNavState();
  return (
    <>
      <nav className="rounded-full  border border-white/10 flex justify-start items-center gap-x-4 py-2   bg-white/5 cursor-pointer">
        {text.map((e) => (
          <SpanHeader
            key={e}
            onClick={() => {
              selected.set(e); 
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
