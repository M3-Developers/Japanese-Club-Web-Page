import { Component, useState } from 'react';
import barStyle from '../../Assets/Style/Page5/blog.css';
import filterIcon from '../../Assets/img/filter.svg';

function SideBar({ setCategoriaSelecionada }) {

  var StatusVar = "IdOff";//
  var OpossiteVar = "IdOn";

  const[ButtonRecente,setButtonRecente]=useState(OpossiteVar)
  const[ButtonAnime,setButtonAnime]=useState(StatusVar)
  const[ButtonCulminancia,setButtonCulminancia]=useState(StatusVar)
  const[ButtonCultura,setButtonCultura]=useState(StatusVar)
  const[ButtonCuriosidades,setButtonCuriosidades]=useState(StatusVar)

    const handleCategoriaClick = (categoria,) => {

      if(categoria === "Todas"){
        setButtonRecente(OpossiteVar)
        setButtonAnime(StatusVar);
        setButtonCulminancia(StatusVar);
        setButtonCultura(StatusVar);
        setButtonCuriosidades(StatusVar);
      }
      else if(categoria === "anime"){
        setButtonRecente(StatusVar)
        setButtonAnime(OpossiteVar);
        setButtonCulminancia(StatusVar);
        setButtonCultura(StatusVar);
        setButtonCuriosidades(StatusVar);
      }

      else if(categoria === "culminancia"){
        setButtonRecente(StatusVar)
        setButtonAnime(StatusVar);
        setButtonCulminancia(OpossiteVar);
        setButtonCultura(StatusVar);
        setButtonCuriosidades(StatusVar);
      }

      else if(categoria === "cultura"){
        setButtonRecente(StatusVar)
        setButtonAnime(StatusVar);
        setButtonCulminancia(StatusVar);
        setButtonCultura(OpossiteVar);
        setButtonCuriosidades(StatusVar);
      }
      else if (categoria === "curiosidades"){
        setButtonRecente(StatusVar)
        setButtonAnime(StatusVar);
        setButtonCulminancia(StatusVar);
        setButtonCultura(StatusVar);
        setButtonCuriosidades(OpossiteVar);
      }

      setCategoriaSelecionada(categoria);

    };

  
    return (
      <div className=' categoriasConteiner'>

<p className='categoriaTxt'><img src={filterIcon} className='filterIcon'/>categorias</p>
        {/* Renderize as opções da barra lateral, cada uma com um onClick que chama handleCategoriaClick */}
        <button onClick={() => handleCategoriaClick("Todas")} id={ButtonRecente} className="seletor">Mais Recentes</button>
        <button onClick={() => handleCategoriaClick("anime")} id={ButtonAnime} className="seletor">Animes</button>
        <button onClick={() => handleCategoriaClick("culminancia")} id={ButtonCulminancia} className="seletor">Culminância</button>
        <button onClick={() => handleCategoriaClick("cultura")} id={ButtonCultura} className="seletor">Cultura</button>
        <button onClick={() => handleCategoriaClick("curiosidades")}id={ButtonCuriosidades} className="seletor">Curiosidades</button>
        {/* ... outras opções de categoria */}
      </div>
    );
  }
  

export default SideBar;