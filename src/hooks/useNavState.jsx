import { useState } from "react";

const useNavState = () => {
  const [select, setSelect] = useState("");
  function manejarSelect(message) {
    setSelect(message);
  }
  const text = ["Todos", "FullStack", "FrontEnd", "BackEnd"];

  return {
    setSelect,
    select,
    manejarSelect,
    text
  }
}

export default useNavState
