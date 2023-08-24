import React from 'react';
import headerStyle from '../../Assets/Style/Uni/header.css';
import japanIcon from '../../Assets/img/japanIcon.svg';

function Header(){
    return(
    

        // Corpo do Header
        
        <header>

            {/* Area de Navegacao */}

            <nav>

                {/* Bandeira do Japao Icone */}

                <div>
                    <a href="../../App.js"><img src = {japanIcon} className='JapanIcon' alt="JapanIcon"/> </a>
                </div>

            {/* Header Botoes */}

            <div className="Categorias">
                <div id='sub'>
                    <a href="">sobre</a>
                </div>

                <div id='sub'>
                    <a href="">aulas</a>
                </div>

                <div id='sub'>
                    <a href="">blog</a>
                </div>

                <div id='sub'>
                    <a href="">mídias</a>
                </div>
            </div>

            {/* Idioma Botoes */}
            
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