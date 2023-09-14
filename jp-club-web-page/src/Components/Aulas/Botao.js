import {useState} from 'react';
import btnAulas from '../../Assets/Style/Page3/btnAulas.css';
import aulasStyle from '../../Assets/Style/Page3/aulaBotao.css';

function Botao(props) {
    
    //  Variaveis

    var StateVar;//Variavel de estado da divisão
    var BtnVar;//Variavel de estado do botão
    var BtnTxtVar;//Variavel de estado do texto do botão

    //Variaveis com o useState

    const [State,setState] = useState("off");//Declarando estado padrão da variavel de estado
    const [BtnState,setBtnState] = useState('btnOff')//Declarando estado padrão da variavel do botão
    const [BtnTxt,setBtnTxt] = useState('btntxtOff')//Declarando estado padrão do texto do botão

    //Função ativada ao clicar no botão
    const changeState = () => {
        if(State === "off") {//Se o botão estiver desligado faça isso:
            StateVar ="on";//Declarando estado como ligado
            BtnVar = 'btnOn';//Declarando botão como ligado
            BtnTxtVar = 'btntxtOn';//Declarando texto como ligado
        }
        else{//Caso o botão estiver ligado faça isso:
            StateVar ="off";//Declarando estado desligado
            BtnVar = 'btnOff';//Declarando botão como desligado
            BtnTxtVar = 'btntxtOff';//Declarando texto como desligado
        }

        //atribuindo as variaveis privadas para as publicas
        setState(StateVar);
        setBtnState(BtnVar);
        setBtnTxt(BtnTxtVar);
    }

    return(
        <div className='aulasContainer'> {/*Divisão de geral dos botões*/}

            <button onClick={changeState} className={BtnState}>{/*Botão com função onclick para ser ativado ao ser clicado */}
               <p className ={BtnTxt}>{props.txt}</p>{/*Texto do botão com variavel como classe e variavel para definir o texto */}
            </button>

            <div className={State}>{/*Divisão que vai ser aberta ao clicar no botão */}

                <figure>{/*Divisão do video */}
                <iframe  id='aulaMP4'//Video do botão
                            src= {props.video} 
                            width="560"
                            height="315"  
                            frameborder="0"
                            allowFullScreen >
                            </iframe>
                </figure>


                    <article>{/*Divisão para os textos*/}

                    <p>
                        {props.title}{/*Propriedade do titulo */}
                    </p>

                    <h6>
                        {props.descricao}{/*Propriedade da descrição */}
                    </h6>

                    <div className='btnDoc'><a href={props.arquivo} download>PDF</a></div>{/*Botão de download */}

                    </article>
                
            </div>

        </div>
    )
}

//Exportando o componente
export default Botao;