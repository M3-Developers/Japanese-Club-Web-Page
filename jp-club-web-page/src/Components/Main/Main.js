import React from 'react'; // Import React
import fontsStyle from '../../Assets/Style/Uni/fonts.css';
import mainStyle from '../../Assets/Style/Page1/main.css'; //Import Folha de Estilo
import Resumo from './ResumoClube';
import Cards from './Cards';

function Main(){
        return(

            // Espaco Primario Main de Conteudos

            <div className='menuHome'>

            <Resumo/>

            <Cards/>
        
            </div>

        )
}

export default Main;