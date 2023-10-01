import noticeStyle from "../../../Assets/Style/Uni/notices.css"


function Manchete(props){

    return(
        <div>
            <article>
                <h1 className="mancheteTitle">
                    {props.NoticeTitle}
                </h1>

                <h5 className="mancheteTxt">
                    {props.NoticeSubtitle}
                </h5>
            </article>
        </div>
    )
}

export default Manchete;
