import React from 'react'; // Import React
import fontsStyle from '../../Assets/Style/fonts.css'
import mainStyle from '../../Assets/Style/main.css'; //Import Folha de Estilo

function Main(){
        return(

            // Espaco Primario Main de Conteudos

            <div className='menu'>

                {/* Espaco Resumo */}
                <article>

                    {/* Resumo Titulo */}
                    <h3>Clube da Língua Japonesa</h3>

                    {/* Resumo Barra Vermelha  */}
                    <div className='barra' />

                        {/* Resumo Descricao */}
                        <h6 className='description'>O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares</h6>

                    {/* Resumo Barra Vermelha  */}
                    <div className='barra' />

                </article>

                {/* Espaco Sessao NEWS Cards */}
                <section>

                    <h4>NEWS</h4>{/* Sessao Cards Titulo */}

                        <hr/>{/* Sessao Cards Linha Pontilhada */}

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

export default Main;