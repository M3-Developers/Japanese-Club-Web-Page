import React, { useState, useEffect } from 'react'; // Import do React Habilitando Funcoes do Banner
import bannerStyle from '../../Assets/Style/banner.css'; //Import Folha de Estilo
import Waifu from './PersonagVirtual.js'; // Import de Componente Waifu


function Banner() {

    // Definindo Funcoes do Banner
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerData = [

    // Definindo Dados para Banner
    
    // Conjunto 1
    {
      title: 'Clube da Língua Japonesa',
      description: 'O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares',
      image: 'https://drive.google.com/uc?export=view&id=1c7RNLrbJa03-BMWDu9NOzMBS1qX9Ys_F'
    },

    // Conjunto 2
    {
      title: 'Título da Imagem 2',
      description: 'Descrição da Imagem 2',
      image: 'https://drive.google.com/uc?export=view&id=1WTlKLtGHjNvjIifyUwQ_D0hbbAwdezQ7'
    }
  ];

  
//   Efeitos de Transicao do Banner

  useEffect(() => {
    const interval = setInterval(changeBannerItem, 7000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const showCurrentItem = (index) => index === currentIndex ? 'active' : '';

  const changeBannerItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  }

  return (

    // Espaco Primario Banner

    <main>

       <div id='banner-container'> {/* Espaco Primario Interno Banner */}


        {/* Atribuicao de Funcao Banner */}
        {bannerData.map((item, index) => (
          <div
            key={index}
            className={`banner-item ${showCurrentItem(index)}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >


            <div className='banner-overlay'> {/* Sombreado de Destaque Esquerdo do Banner */}

              <div className='banner-text'> {/* Espaco Primario de Texto */}

                <h2 className='banner-title'>{item.title}</h2> {/* Titulo Automatico */}

                <p className='banner-description'>{item.description}</p> {/* Descricao Automatica */}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Posicionamento de Espaco Primario de Waifu */}

      <div className='waifuDiv'>
        <Waifu /> {/* Componente com Imagem Waifu Pre-Formatado */}
      </div>

    </main>
  );
}

export default Banner;
