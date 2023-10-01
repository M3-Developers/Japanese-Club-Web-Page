import fontsStyle from '../../Assets/Style/Uni/fonts.css';
import SobreStyle from '../../Assets/Style/Page2/sobre.css';
import clubeImg from '../../Assets/img/ClubeImg.jpg';

function Clube() {
    return(
        <div className='menu'>

                {/* Espaco Resumo */}
                <article>

                    <p className='impactTitles'>sobre</p>

                    {/* Resumo Barra Vermelha  */}
                    <div className='barraS' />

                    {/* Resumo Titulo */}
                    <h3>Clube da Língua Japonesa</h3>

                        {/* Resumo Descricao */}
                        <h6 className='description'>    O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares
    O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares
    O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares</h6>
                        
                            <img src = {clubeImg} className='ClubImg' alt="ClubeImagem"/>

                            <iframe 
                            src="https://www.youtube.com/embed/NPX6_qfUIhw"
                            width="560"
                            height="315"  
                            frameborder="0"
                            allowfullscreen >
                            </iframe>

                </article>
        </div>
    )
}

export default Clube;