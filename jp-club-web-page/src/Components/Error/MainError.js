//Importando arquivos
import errorStyle from '../../Assets/Style/Page4/error.css'
import ErrorImg from '../../Assets/img/ErrorImg.png'

//Criando componente
function Error(){

    return(
        <div>

            <div className='mainError'>{/*Div do conteudo principal da pagina */}

                <img src={ErrorImg} className='ImageHaru' alt="JapanIcon" />{/*Imagem da Haru-chan confusa */}

            <article>{/*Divisão para textos */}

                <h3>
                    #404
                </h3>

                <h6>
                    Ops, não foi possivel encontrar a pagina buscada
                </h6>

            </article>

            </div>

            <div className='effect'>{/*efeito de gradiante */}

            </div>

        </div>
    )
}

//Exportando arquivo
export default Error;