import React from 'react'; // Import React
import waifuImg from '../../Assets/img/waifu.png'; //Import Waifu Img
import waifuStyle from '../../Assets/Style/waifu.css'; //Import Folha de Estilo


function Waifu(){
    return(

        // Espaco Primario Waifu
        <div className="container"> 

        <img src={waifuImg} className="waifu" /> {/* Img Waifu */}

        </div>
    )
}

export default Waifu;