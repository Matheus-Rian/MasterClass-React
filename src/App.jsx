import React from "react";
import Primeiro from "./components/Primeiro.jsx";
import PassandoParam from "./components/PassandoParam";
import ComFilhos from "./components/ComFilhos";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalIf from "./components/CondicionalIf";
import Card from "./components/layout/Card";
import "./App.css";

//eslint-disable-next-line
export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalIf numero={11} />
    </Card>

    <Card titulo="#05 - Condicional v1">
      <Condicional numero={10} />
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao />
    </Card>

    <Card titulo="#03-Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Matheus</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 -Componente com Parametro">
      <PassandoParam titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
    </Card>

    <Card titulo="#01 -Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
