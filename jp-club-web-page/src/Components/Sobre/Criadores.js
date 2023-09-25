import fontsStyle from '../../Assets/Style/Uni/fonts.css'
import SobreStyle from '../../Assets/Style/Page2/sobre.css'
import criadoresImg from '../../Assets/img/criadoresImg.png'

function Criadores() {
    return(
        <div className='menuCriadores'>

                {/* Espaco Resumo */}
                <article>

                    {/* Resumo Titulo */}
                    <h3 className='criadoresTitle'>Criadores do Clube</h3>

                        <div className='criadoresConteiner'>

                        <img src = {criadoresImg} className='criadoresImg' alt="criadoresImg"/>

                        {/* Resumo Descricao */}
                        <h6 className='descriptionCriadores'>
                            
                            <p className='subTitleCriadores'>M3 Developers</p>    
                            Confira nosso grupo de desenvolvimento

                            <div className='saibaMais'><a href='https://youtube.com/@M3Devs?si=6SAXr-PNy82WY12W'>saiba mais</a></div>
                        </h6>
                        
                        </div>

                </article>
        </div>
    )
}

export default Criadores;