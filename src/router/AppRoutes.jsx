import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AutenticacaoContext, AutenticacaoProvider } from "../contexts/autenticacao";
import { useContext } from "react";

import Login from "../pages/login";
import Cadastro from "../pages/cadastroUsuario";
import Home from "../pages/home";
import CadastroProduto from "../pages/cadastroProduto"
import CadastroCategoria from "../pages/cadastroCategoria/CadastroCategoria";


const AppRoutes = () => {
    const Private = ({ children }) => {
        const { autenticado } = useContext(AutenticacaoContext) ?? {};
        if (autenticado) {
            return children
        } else {
            return <Navigate to='/' />
        }
    }

    return (
        <Router>
            <AutenticacaoProvider>
                <Routes>
                    <Route exact path="/home" element={<Private><Home /></Private>} />
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/cadastroUsuario" element={<Cadastro />} />
                    <Route exact path="/cadastroProduto" element={<Private><CadastroProduto /></Private>} />
                    <Route excit path="/cadastroCategoria" element={<Private><CadastroCategoria/></Private>}/>
                </Routes>
            </AutenticacaoProvider>

        </Router>
    )
}
export default AppRoutes