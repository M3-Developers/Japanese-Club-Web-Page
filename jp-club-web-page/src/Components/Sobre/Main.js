import Clube from './ClubeBio';
import Mascote from './Mascote';
import Criadores from './Criadores';
import sobreStyle from '../../Assets/Style/Page2/sobre.css';
import Periodo from './Periodo';

function MainS(){
    return(
        <div className="menuSobre">
            <Clube/>
            <Mascote/>
            <Criadores/>
            <Periodo/>
        </div>
    )
}

export default MainS;