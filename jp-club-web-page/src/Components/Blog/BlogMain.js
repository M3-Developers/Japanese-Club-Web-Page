import News from './NewsBloco'
import SideBar from './SideBar'
import blogStyle from '../../Assets/Style/Page5/blog.css'
import React, { useState } from "react";

const componentes = [
    { nome: "Componente1", categoria: "anime" },
    { nome: "Componente2", categoria: "anime" },
    { nome: "Componente3", categoria: "culminancia" },
    { nome: "Componente4", categoria: "cultura" },
    { nome: "Componente5", categoria: "culminancia" },
    { nome: "Componente6", categoria: "anime" },
    { nome: "Componente7", categoria: "anime" },
    { nome: "Componente8", categoria: "cultura" },
    { nome: "Componente9", categoria: "culminancia" },
    { nome: "Componente10", categoria: "teste" },
    // ...
  ];
  

function NewsBloco() {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

    const componentesFiltrados =
    categoriaSelecionada === "Todas"
      ? componentes
      : componentes.filter((componente) => componente.categoria === categoriaSelecionada);


      return (
        <div>
          <SideBar setCategoriaSelecionada={setCategoriaSelecionada} />
          {componentesFiltrados.map((componente, index) => (
            <div key={index}>
              <News catego={componente.categoria}>
                {componente.categoria}
              </News>
            </div>
          ))}
        </div>
      );
    }

export default NewsBloco;