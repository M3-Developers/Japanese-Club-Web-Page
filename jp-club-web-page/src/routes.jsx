//Importando componente das paginas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Aulas from './routes/Aulas';
import Error from './routes/Error';
import Blog from './routes/Blog';
import Midia from './routes/Midias';
import NPage1 from './routes/NewsPages/Page1'

//Criando componente de rotas
function AppRoutes() {
    return (
        //Rotas para cada pagina
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>{/*Rota de home*/}
                <Route path="/sobre" element={ <Sobre /> }></Route>{/*Rota de sobre*/}
                <Route path="/aulas" element={ <Aulas/> }></Route>{/*Rota de aula*/}
                <Route path="/blog" element={ <Blog/> }></Route>{/*Rota do Blog*/}
                <Route path="/midias" element={ <Midia/> }></Route>{/*Rota do Midia*/}
                <Route path="blog/notice1" element={ <NPage1/> }></Route>
                <Route path="*" element={ <Error /> }></Route> {/*Rota de erro*/}
            </Routes>
        </BrowserRouter>
    )
}

//Exportando o componente rotas
export default AppRoutes;