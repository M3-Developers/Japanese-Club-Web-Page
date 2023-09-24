//importando componentes
import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MidiaMain from '../Components/Midias/midias';


//Criando o componente
function Midia() {
  return (
    //exibindo os componentes em ordem
    <div>
      <Header/>{/*Header */}
      <MidiaMain/>{/*Conteudo da pagina */}
      <Footer/>{/*Footer */}
    </div>

  );
}

//Exportando componente
export default Midia;