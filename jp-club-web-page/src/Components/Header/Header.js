import React from 'react';
import headerStyle from '../../Assets/Style/Uni/header.css';
import japanIcon from '../../Assets/img/japanIcon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // Corpo do Header
    <header>
      {/* Área de Navegação */}
      <nav>
        {/* Bandeira do Japão Ícone */}
        <div>
          <Link to="/"><img src={japanIcon} className='JapanIcon' alt="JapanIcon" /></Link>
        </div>

        {/* Header Botões */}
        <div className="Categorias">
          <div id='sub'>
            <Link to='/sobre'>Sobre</Link>
          </div>
          <div id='sub'>
            <Link to='/aulas'>Aulas</Link>
          </div>
          <div id='sub'>
            <Link to='/blog'>Blog</Link>
          </div>
          <div id='sub'>
            <Link to='/midias'>Mídias</Link>
          </div>
        </div>

        {/* Idioma Botões */}
        <div className='lang'>
          <div id='subLang'>
            <a href="">jp</a>
          </div>
          <div id='subLang'>
            <a href="">pt-br</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;