import fontsStyle from '../../Assets/Style/Uni/fonts.css'
import SobreStyle from '../../Assets/Style/Page2/sobre.css'
import haruIcon from '../../Assets/img/iconHaru.png'

function Mascote() {
    return(
        <div className='menuMascote'>

                {/* Espaco Resumo */}
                <article>

                    {/* Resumo Titulo */}
                    <h3 className='mascoteTitle'>Nossa Mascote</h3>

                        {/* Resumo Descricao */}
                        <h6 className='descriptionHaru'>
                            <p className='subTitleHaru'>Uma curiosidade sobre o nome dela: </p>    
                            Haru significa primavera em japonês ( 春 ), nesta época no Japão é justamente a temporada das famosas sakura  (flores de cerejeira) e flores de pessegueiro, e também marca um novo ano para os japoneses, já que o ano escolar e de trabalho começa em Abril.
 Em breve traremos mais figurinhas e muito mais!
A produção não para! </h6>
                        
                            <img src = {haruIcon} className='haruIcon' alt="HaruIcone"/>

                </article>
        </div>
    )
}

export default Mascote;