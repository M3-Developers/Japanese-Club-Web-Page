import fontsStyle from '../../Assets/Style/Uni/fonts.css'
import SobreStyle from '../../Assets/Style/Page2/sobre.css'
import ClubeImg from '../../Assets/img/ClubeImg.jpg'
import ImgStyle from '../../Assets/Style/Page2/imagens.css'

function Clube() {
    return(
        <div classname = 'Td'>
            
        <h2 classname = 'TitleSobre'>sobre</h2>
        
        <div className = 'MarginTxt'>

        <h3>Clube da Lingua Japonesa</h3>

        <div className='ImgAlignt'>

        <div>
            <h6>   O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares
    O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares
    O clube de japonês do salotti é um grupo altamente preparado e sempre se mantem em desenvolvimento de acordo com as regras escolares</h6>
        </div>
        
        <div>
            <img src ={ClubeImg} className='imgA'/> 
        </div>

        </div>

        </div>
        </div>
    )
}

export default Clube;