import {useState} from 'react';
import Botao from './Botao';

function Menu() {

    return(
        <div>
            <Botao txt = 'Introdução: porque estudar lingua japonesa' descricao = 'apenas negocios'/>
            <Botao txt = 'Hiragana: o alphabeto mais importante do Japão' descricao = 'muito legal'/>
            <Botao txt = 'Katakana: o alphabeto estrangeiro' descricao = 'alibaba e os 50 ladroes'/>
        </div>
    )
}

export default Menu;