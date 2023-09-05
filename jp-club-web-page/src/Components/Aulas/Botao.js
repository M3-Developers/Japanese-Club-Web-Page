import {useState} from 'react'
import botaoStyle from '../../Assets/Style/Page3/aulaBotao.css'

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
            <h6>
                {props.descricao}
            </h6>
            </div>

        </div>
    )
}

export default Botao;