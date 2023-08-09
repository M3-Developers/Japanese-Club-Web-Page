import headerStyle from '../../Style/Header.css';
import japanIcon from '../../Assets/img/japanIcon.svg';

function Header(){
    return(
    

        <header>
            <nav>
                <div>
                    <a href="../../App.js"><img src = {japanIcon} className='JapanIcon' alt="JapanIcon"/> </a>
                </div>

            <div className="Categorias">
                <div id='sub'>
                    <a href="">sobre</a>
                </div>

                <div id='sub'>
                    <a href="">aulas</a>
                </div>

                <div id='sub'>
                    <a href="">mídias</a>
                </div>

                <div id='sub'>
                    <a href="">contato</a>
                </div>
            </div>
            <div className='lang'>
                <div id='subLang'>
                    <a href="">jp</a>
                </div>
                <div id='subLang'>
                    <a href="">pt-br</a>
                </div>
            </div>


            </nav>
        </header>
    )
}

export default Header;