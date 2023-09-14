//importando componentes
import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MainError from '../Components/Error/MainError'


//Criando o componente
function Error() {
  return (
    //exibindo os componentes em ordem
    <div>
      <Header/>{/*Header */}
      <MainError/>{/*Conteudo da pagina */}
      <Footer/>{/*Footer */}
    </div>

  );
}

//Exportando componente
export default Error;
