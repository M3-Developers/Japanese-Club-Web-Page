import {useState} from 'react';
import Botao from './Botao';

function Menu() {

    return(
        <div className='menu'>

            <p className='impactTitles'>aulas</p>

            <div className='barraA'/>

            <h3>Introdução: O que é a lingua japonesa</h3>

            <div className='bottomContainer'>

            <Botao
                video = 'https://www.youtube.com/embed/AT7TdWydp-c?si=iyIMMxhSF7ms1bf1'
                title = 'Oque iremos estudar' 
                txt = 'Sobre o curso'
                descricao = '    A Constituição Federal de 1988 é a atual Carta Magna do Brasil, sétima constituição brasileira e sexta como república. Você sabe as características e como ela foi implementada? Então, continue a leitura, pois, neste post, contamos, resumidamente, o que é necessário entender sobre o assunto. Confira!'
            />

            <Botao
                title = 'ola mundo' 
                txt = 'Hiragana:Definição'
                descricao = 'muito legal'
            />

            <Botao 
                title = 'ola mundo'
                txt = 'Katakana: Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            <Botao 
                video ='https://www.youtube.com/watch?v=6p9Il_j0zjc'
                title = 'ola mundo'
                txt = 'Kanji:Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            </div>

            <h3>Hiragana: O alphabeto mais importante</h3>

            <div className='bottomContainer'>

            <Botao 
                title = 'ola mundo'
                txt = 'O que é o hiragana'
                descricao = 'apenas negocios'
            />

            <Botao 
                title = 'ola mundo'
                txt = 'Hiragana:Definição'
                descricao = 'muito legal'
            />

            <Botao 
                title = 'ola mundo'
                txt = 'Katakana: Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            <Botao 
                title = 'ola mundo'
                txt = 'Kanji:Definição' 
                descricao = 'alibaba e os 50 ladroes'
            />

            </div>

<div className='barraA'/>

        </div>

        
    )
}

export default Menu;