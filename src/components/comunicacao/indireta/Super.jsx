import React, { useState } from "react";
import Sub from "./Sub";
//eslint-disable-next-line
export default (props) => {
    
  const [texto, setTexto] = useState("Valor");
  const [num, setNum] = useState(0);

  function handleClick(valorGerado, texto) {
    setNum(valorGerado);
    setTexto(texto);
  }
  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub onClicar={handleClick}></Sub>
    </div>
  );
};
