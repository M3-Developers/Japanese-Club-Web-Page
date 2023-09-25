import newsStyle from '../../Assets/Style/Page5/NewsComponent.css'
import fontStyle from '../../Assets/Style/Uni/fonts.css'

function News(props) {

    const IMG ="https://images2.alphacoders.com/132/1323416.jpeg";

    return(
        <div>
            <div className = 'BlocoNews'>
                <figure>
                    <img src={IMG}/>
                </figure>

                <article className= 'txtContainer'>
                    <h3 className ='txtNewsCard'>
                        Jujutsu Kaisen
                    </h3>

                    <h6 className ='txtNewsCard2'>
                    Como o autor morreu mudaram tudo e blá blá blá tá boa mas tá ruim veja pra ter uma opinião é isso ai não sei mais como enxer linguiça
                    </h6>

                    
                <div className = 'direction'>

                    <p id='animeId' className='categoriasContent'>
                        {props.catego}
                    </p>
{/* 
                    <p id='culminanciaId' className='categoriasContent'>
                        culminância
                    </p>
                    
                    <p id='culturaId' className='categoriasContent'>
                        cultura
                    </p> */}

                    <p id='240923' className='dataContent'>
                        24/09/2023
                    </p>
                </div>

                </article>

            </div>
        </div>
    )
}

export default News;