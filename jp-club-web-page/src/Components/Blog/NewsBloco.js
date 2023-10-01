import newsStyle from '../../Assets/Style/Page5/NewsComponent.css'
import fontStyle from '../../Assets/Style/Uni/fonts.css'

function News(props) {

    return(
        <div>
            <div className = 'BlocoNews'>
                <figure>
                <a href={props.link}> <img src={props.image}/> </a>
                </figure>

                <article className= 'txtContainer'>
                    <h3 className ='txtNewsCard'>
                        <a href={props.link}>{props.title}</a>
                    </h3>

                    <h6 className ='txtNewsCard2'>
                        {props.txt}
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
                        {props.data}
                    </p>
                </div>

                </article>

            </div>
        </div>
    )
}

export default News;