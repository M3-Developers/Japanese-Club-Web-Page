import News from './NewsBloco'
import SideBar from './SideBar'
import blogStyle from '../../Assets/Style/Page5/blog.css'

function NewsBloco() {
    return(
        <div className ='menu'>
             <p className='impactTitles'>blog</p> {/*Texto de categoria */}

            <div className='barraA'/>{/*Barra vermelha */}
<SideBar/>

            <News/>
            <News/>
            <News/>


        </div>
    )
}

export default NewsBloco;