import barStyle from '../../Assets/Style/Page5/blog.css';
import filterIcon from '../../Assets/img/filter.svg';

function SideBar({ setCategoriaSelecionada }) {
    const handleCategoriaClick = (categoria) => {
      setCategoriaSelecionada(categoria);
    };
  
    return (
      <div className=' categorias2'>

<p className='categoriaTxt'><img src={filterIcon} className='filterIcon'/>categorias</p>
        {/* Renderize as opções da barra lateral, cada uma com um onClick que chama handleCategoriaClick */}
        <button onClick={() => handleCategoriaClick("anime")} className='categoriasContent'>Animes</button>
        <button onClick={() => handleCategoriaClick("culminancia")} className='categoriasContent'>Culminância</button>
        <button onClick={() => handleCategoriaClick("cultura")} className='categoriasContent'>Cultura</button>
        <button onClick={() => handleCategoriaClick("curiosidades")} className='categoriasContent'>Curiosidades</button>
        {/* ... outras opções de categoria */}
      </div>
    );
  }
  

export default SideBar;