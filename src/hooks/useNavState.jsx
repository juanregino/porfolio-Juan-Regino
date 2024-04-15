import { useState } from "react";

const useNavState = () => {
  const [select, setSelect] = useState("FrontEnd");
  function handleSelect(message) {
    setSelect(message);
  }
  const text = ["Todos", "FullStack", "FrontEnd", "BackEnd"];

  return {
    setSelect,
    select,
    handleSelect,
    text
  }
}

export default useNavState
