import barStyle from '../../Assets/Style/Page5/blog.css';
import filterIcon from '../../Assets/img/filter.svg';

function SideBar() {
    return(
        <div>

        <div className=' categorias2'> 

            <p className='categoriaTxt'><img src={filterIcon} className='filterIcon'/>categorias</p>

            <a>
                Mais Recentes
            </a>
            <a>
                Animes
            </a>
            <a>
                Culminância
            </a>
            <a>
                Cultura
            </a>
            <a>
                Curiosidades
            </a>
        </div>    

        </div>
    )
}

export default SideBar;