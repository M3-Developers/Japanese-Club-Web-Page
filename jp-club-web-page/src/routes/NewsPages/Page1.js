import React from "react";
import Header from "../../Components/Header/Header";
import Manchete from "../../Components/Blog/Notices/TitleNotice";
import Materia from "../../Components/Blog/Notices/MateriaComponent";
import Footer from "../../Components/Footer/Footer";
import imagem from "../../Assets/noticia/noticia01/imagem.jpeg";

function Blog() {
  return (
    <div>
      <Header />
      <Manchete
        NoticeTitle="BLEACH: A Guerra Sangrenta dos Mil Anos"
        NoticeSubtitle="Segunda Parte da Temporada termina com batalhas inéditas e de tirar o folêgo."
      />

      <Materia
        firtMedia={imagem}
        firstParagraph='- Alerta de Spoiler! - Após uma ardua batalha entre Shinigamis e Quincys, a Segunda Parte do Anime BLEACH: The Thousand-Year Blood War chega ao fim com o brutal confronto entre a Divisão Zero, Yhwach e seus Sternritters. Neste segundo cour do anime tivemos bankais e lutas inéditas tais como o Capitão Shinji e sua Bankai proibida, batalhas originais no Palácio Real e Capitã da Guarda Real Senjumaru e sua Bankai que retalha seus oponentes sendo capaz de "estremecer os três mundos". Outro fator a se levar em conta é o retorno de Ichigo Kurosaki portando duas Zanpakutos juntamente com Renji e Rukia, que fazem uso de suas novas Bankais após o treinamento com a Divisão Zero. '
        extraParagraph='Sinopse: Liderados por Yhwach, o pai de todos os Quincies, os Wandenreich declaram guerra contra os Soul Reapers com a seguinte mensagem: “Daqui a cinco dias, a Soul Society será aniquilada pelos Wandenreich. A história e a verdade mantida escondida pelos Soul Reapers por mil longos anos serão finalmente trazidas à luz. Todas as coisas devem chegar ao fim – assim que a batalha final de Ichigo.'
        secondMedia="https://www.youtube.com/embed/xS6F81CV6Sw?si=9N9VJD1U_8rpyc8S"
        secondParagraph="Mais uma vez a animação retorna com força total. Sendo o Estúdio Pierrot e Tomohisa Taguchi, responsável pela estreia da segunda parte do arco, entregou um episódio espetacular. Com transições criativas e cores marcantes, o décimo quarto episódio de Thousand Year Blood War mantém o mesmo nível de entrega da primeira leva, lançada em 2022. Após a exibição, foi anunciada a Parte 3 - O Conflito, que estreia em 2024. No total, a adaptação em anime de A Guerra Sangrenta dos Mil Anos, o arco final do mangá de Tite Kubo, contará com 52 episódios, que serão distribuídos em 4 partes."
      />
      <Footer />
    </div>
  );
}

export default Blog;
