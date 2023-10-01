function Materia(props){
    return(
        <div>

            <div className="firstNoticeContainer">

            <p className="firstParagraph">
                {props.firstParagraph}<br/><br/>
                {props.extraParagraph}
            </p>

            <img id="firstMedia" src={props.firtMedia}/>


            </div>

            <div className="secondNoticeContainer">

            <p className="secondParagraph">
                                {props.secondParagraph}
                            </p>

                <iframe id="secondMedia" //Video do botão
                    src= {props.secondMedia} 
                    width="560"
                    height="315"  
                    frameborder="0"
                    allowFullScreen >
                 </iframe>

                 <img id="secondMedia" src={props.secondMedia2}/>

            </div>

        </div>
    )
}

export default Materia;