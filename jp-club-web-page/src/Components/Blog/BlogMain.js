import News from "./NewsBloco";
import SideBar from "./SideBar";
import blogStyle from "../../Assets/Style/Page5/blog.css";
import React, { useState } from "react";

const componentes = [
  {
    IMG: "https://drive.google.com/uc?export=view&id=1pUH887Il68P04Zof6FeRudBnMgo4TqFv",
    nome: "Terceira Temporada de Bleach é Anunciada",
    texto: "BLEACH: A Guerra Sangrenta dos Mil Anos finaliza seu segundo cour",
    tempo: "01/10/2023",
    categoria: "anime",
    LinkBlog: "/notice1",
  },
  {
    IMG: "https://drive.google.com/uc?export=view&id=1mXV9-JqsJJBQ-Z2TUr6xed_Eny2jYOz2",
    nome: "Titulo Provisório",
    texto: "Descrição Provisória",
    tempo: "XX/XX/202X",
    categoria: "curiosidades",
    LinkBlog: "/notice1",
  },
  {
    IMG: "https://drive.google.com/uc?export=view&id=1VWzAU1LUz_1zuq_2lAQ1XJeD1DGGC6A8",
    nome: "Undead Unluck ganhará adaptação em Anime",
    texto: "Pelo mesmo Estúdio de JoJo's, animação terá estreia em Outubro.",
    tempo: "18/09/2023",
    categoria: "anime",
    LinkBlog: "/notice1",
  }, // ...

  {
    IMG: "https://drive.google.com/uc?export=view&id=1Ci3RwB57h1GaTFajlFqDHZPYzAWf17pa",
    nome: "Anime de Progamador?",
    texto: "Conheça o anime New Game!",
    tempo: "XX/10/2023",
    categoria: "anime",
    LinkBlog: "/notice1",
  }, // ...

  {
    IMG: "https://drive.google.com/uc?export=view&id=1mXV9-JqsJJBQ-Z2TUr6xed_Eny2jYOz2",
    nome: "Titulo Provisório",
    texto: "Descrição Provisória",
    tempo: "XX/XX/202X",
    categoria: "cultura",
    LinkBlog: "/notice1",
  }, // ...

  {
    IMG: "https://drive.google.com/uc?export=view&id=1mXV9-JqsJJBQ-Z2TUr6xed_Eny2jYOz2",
    nome: "Titulo Provisório",
    texto: "Descrição Provisória",
    tempo: "XX/XX/202X",
    categoria: "cultura",
    LinkBlog: "/notice1",
  }, // ...

  {
    IMG: "https://drive.google.com/uc?export=view&id=1mXV9-JqsJJBQ-Z2TUr6xed_Eny2jYOz2",
    nome: "Titulo Provisório",
    texto: "Descrição Provisória",
    tempo: "XX/XX/202X",
    categoria: "curiosidades",
    LinkBlog: "/notice1",
  }, // ...

  {
    IMG: "https://drive.google.com/uc?export=view&id=11BsJMVmxL8L_IveD6eSuVIeFOZsLjS8O",
    nome: "Primeira Culminância do Clube",
    texto: "Confira em detalhes sobre o nosso primeiro evento!",
    tempo: "01/07/2023",
    categoria: "culminancia",
    LinkBlog: "/notice1",
  }, // ...
  {
    IMG: "https://drive.google.com/uc?export=view&id=1mXV9-JqsJJBQ-Z2TUr6xed_Eny2jYOz2",
    nome: "Titulo Provisório",
    texto: "Descrição Provisória",
    tempo: "XX/XX/202X",
    categoria: "culminancia",
    LinkBlog: "/notice1",
  }, // ...
];

function NewsBloco() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const componentesFiltrados =
    categoriaSelecionada === "Todas"
      ? componentes
      : componentes.filter(
          (componente) => componente.categoria === categoriaSelecionada
        );

  return (
    <div>
      <SideBar setCategoriaSelecionada={setCategoriaSelecionada} />
      {componentesFiltrados.map((componente, index) => (
        <div key={index}>
          <News
            image={componente.IMG}
            title={componente.nome}
            txt={componente.texto}
            data={componente.tempo}
            catego={componente.categoria}
            link={componente.LinkBlog}
          >
            {componente.categoria}
          </News>
        </div>
      ))}
    </div>
  );
}

export default NewsBloco;
