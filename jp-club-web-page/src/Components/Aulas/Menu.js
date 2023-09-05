import {useState} from 'react';
import Botao from './Botao';
import SobreStyle from '../../Assets/Style/Page3/aula.css';

function Menu() {

    return(
        <div className='menu'>

            <p className='impactTitles'>aulas</p>

            <div className='barraA'/>

            <h3>Introdução: O que é a lingua japonesa</h3>

            <div className='bottomContainer'>

            <Botao 
                txt = 'Sobre o curso'
                descricao = 'apenas negocios'
            />

            <Botao 
                txt = 'Hiragana:Definição'
                descricao = 'muito legal'
            />

            <Botao 
                txt = 'Katakana: Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            <Botao 
                txt = 'Kanji:Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            </div>

            <h3>Hiragana: O alphabeto mais importante</h3>

            <div className='bottomContainer'>

            <Botao 
                txt = 'O que é o hiragana'
                descricao = 'apenas negocios'
            />

            <Botao 
                txt = 'Hiragana:Definição'
                descricao = 'muito legal'
            />

            <Botao 
                txt = 'Katakana: Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            <Botao 
                txt = 'Kanji:Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            </div>

<div className='barraA'/>

        </div>

        
    )
}

export default Menu;