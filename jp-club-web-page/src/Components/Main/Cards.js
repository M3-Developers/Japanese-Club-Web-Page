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
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>

                {/* Card 2 */}
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>

                {/* Card 3 */}
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>

                {/* Card 4 */}
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>

                {/* Card 5 */}
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>

                {/* Card 6 */}
                <a href="../../App.js"><div className='card'><p>MELHOR WAIFU</p></div></a>


        </div>

</section>
        </div>
    )
}

export default Cards;