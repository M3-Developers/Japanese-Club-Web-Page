import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Aulas from './routes/Aulas'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/aulas" element={ <Aulas/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes