import fontsStyle from '../../Assets/Style/Uni/fonts.css';
import SobreStyle from '../../Assets/Style/Page2/sobre.css';
import presidente1Img from '../../Assets/img/Presidente1.png';
import vice1Img from '../../Assets/img/Vice1.png';

function Periodo() {
    return(
        <div className='menuPeriodo'>
<div className='periodoTitle'>
    <p className='impactTitles'>período</p>
</div>
                {/* Espaco Resumo */}
                <section>     

                    {/* Resumo Titulo */}
                    <h3 className='tempoTitle'>Semestre 2 (2023)</h3>

                {/* Resumo Barra Vermelha  */}
                <div className='barraT' />

                    <div className='membrosContainer'>

                    <div className='viceDiv'>
                            <h3 className='viceTitle'>Vice-presidente</h3>
                                <img src = {vice1Img} className='viceImg' alt="Imagem Vice Marcos Vinicios"/>
                            <h1>Marcos Vinicios <br/><br/>ねえ 日本語は <br/>すごいですね、<br/>お勉強しましょう。</h1>
                        </div>

                        <div className='presidenteDiv'>
                            <h3 className='presidenteTitle'>Presidente</h3>
                                <img src = {presidente1Img} className='presidenteImg' alt="Imagem Presidente Marcelo Afonso"/>
                            <h1>Marcelo Afonso <br/><br/>変わらぬものは <br/>心だと言えるのならば <br/>　それが強さ。</h1>
                        </div>
                        
                        <div className='turmaDiv'>
                            <h3 className='turmaTitle'>Turma</h3>
                                <img src = {vice1Img} className='turmaImg' alt="Imagem Turma"/>
                            <h1>先輩たちは <br/>ありがとう <br/>　ございました。<br/>　楽しかったです！</h1>
                        </div>

                    </div>

                <div className='barraT' />

                    <h3 className='continua'>つづく</h3>

                </section>
        </div>
    )
}

export default Periodo;