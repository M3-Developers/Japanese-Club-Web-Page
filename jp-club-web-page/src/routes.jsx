import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './routes/Home'
import Sobre from './routes/Sobre'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes