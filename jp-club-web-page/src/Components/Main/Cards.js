import React from 'react'; // Import React
import fontsStyle from '../../Assets/Style/Uni/fonts.css';

function Cards() {
    return(
        <div>
 {/* Espaco Sessao NEWS Cards */}
 <section>

<h4>NEWS</h4>{/* Sessao Cards Titulo */}

<div className='barraP'> </div>{/* Sessao Cards Linha Pontilhada */}

        <div className='cardsContainer'>{/* Espaco Interno Sessao Cards */}

        <div className='barra1'> </div>{/* Barra Cards Background */}


                {/* Card 1 */}
                <a href="blog/notice1"><div className='card' id='firstCard'><p>Primeira Culminância</p></div></a>

                {/* Card 2 */}
                <a href="blog/notice1"><div className='card' id='secondCard'><p>Passeio Liberdade</p></div></a>

                {/* Card 3 */}
                <a href="blog/notice1"><div className='card' id='thirdCard'><p>Card Provisório</p></div></a>

                {/* Card 4 */}
                <a href="blog/notice1"><div className='card' id='fourthCard'><p>Card Provisório</p></div></a>

                {/* Card 5 */}
                <a href="../../App.js"><div className='card' id='fifthCard'><p>Em Breve</p></div></a>

                {/* Card 6 */}
                <a href="blog/notice1"><div className='card' id='sixthCard'><p>Conheça os Devs</p></div></a>


        </div>

</section>
        </div>
    )
}

export default Cards;