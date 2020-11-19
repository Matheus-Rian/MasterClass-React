import React from "react";
import Primeiro from "./components/basicos/Primeiro.jsx";
import PassandoParam from "./components/basicos/PassandoParam";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalIf from "./components/basicos/CondicionalIf";
import Card from "./components/layout/Card";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import "./App.css";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import GeradorNumeros from './components/numerosMegaSena/GeradorNumeros'

//eslint-disable-next-line
export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="#11 - Gerador de num Mega Sena" color="#52848B">
      <GeradorNumeros qtdeNumero={8}></GeradorNumeros>
      </Card>
      <Card titulo="#10 - Contador" color="#52848B">
        <Contador passo={10} valor={5}/>
      </Card>
      <Card titulo="#09 - input" color="#60047A">
        <Input />
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super />
      </Card>

      <Card titulo="#07 - Comunicação Direta" color="#F31630">
        <Pai sobrenome="Freitas" />
      </Card>

      <Card titulo="#06 - Condicional v2" color="#F38630">
        <CondicionalIf numero={11} />
      </Card>

      <Card titulo="#05 - Condicional v1" color="#E94C6F">
        <Condicional numero={10} />
      </Card>

      <Card titulo="#04 - Repetição" color="#FDF200">
        <Repeticao />
      </Card>

      <Card titulo="#03-Componente com Filhos" color="#008BBA">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Matheus</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 -Componente com Parametro" color="#75EB00">
        <PassandoParam
          titulo="Esse é o título"
          subtitulo="Esse é o subtítulo"
        />
      </Card>

      <Card titulo="#01 -Primeiro Componente" color="#354458">
        <Primeiro />
      </Card>
    </div>
  </div>
);
