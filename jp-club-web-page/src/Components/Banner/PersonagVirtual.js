import React from 'react';
import waifuImg from '../../Assets/img/waifu.png';
import waifuStyle from '../../Assets/Style/waifu.css';


function Waifu(){
    return(

        <div className="container">
        <img src={waifuImg} className="waifu" />
        </div>
    )
}

export default Waifu;