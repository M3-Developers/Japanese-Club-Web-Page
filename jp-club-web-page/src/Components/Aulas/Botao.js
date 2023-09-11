import {useState} from 'react';
import btnAulas from '../../Assets/Style/Page3/btnAulas.css';
import aulasStyle from '../../Assets/Style/Page3/aulaBotao.css';
import criadoresImg from '../../Assets/img/criadoresImg.png';

function Botao(props) {
    
    var StateVar;
    var BtnVar;
    var BtnTxtVar;

    const [State,setState] = useState("off");
    const [BtnState,setBtnState] = useState('btnOff')
    const [BtnTxt,setBtnTxt] = useState('btntxtOff')

    const changeState = () => {
        if(State === "off") {
            StateVar ="on";
            BtnVar = 'btnOn';
            BtnTxtVar = 'btntxtOn';
        }
        else{
            StateVar ="off";
            BtnVar = 'btnOff';
            BtnTxtVar = 'btntxtOff';
        }
        setState(StateVar);
        setBtnState(BtnVar);
        setBtnTxt(BtnTxtVar);
    }

    return(
        <div className='aulasContainer'>
            <button onClick={changeState} className={BtnState}>
               <p className ={BtnTxt}>{props.txt}</p>
            </button>
            <div className={State}>

                <figure>
                <iframe  id='aulaMP4'
                            src= {props.video} 
                            width="560"
                            height="315"  
                            frameborder="0"
                            allowFullScreen >
                            </iframe>
                </figure>


                    <article>

                    <p>
                        {props.title}
                    </p>

                    <h6>
                        {props.descricao}
                    </h6>

                    <div className='btnDoc'><a href={props.arquivo} download>PDF</a></div>

                    </article>
                
            </div>

        </div>
    )
}

export default Botao;