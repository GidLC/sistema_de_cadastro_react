import React, { useContext } from "react"
import { AutenticacaoContext } from "../contexts/autenticacao.jsx"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function BotaoLogout(tipo, classe) {

    const { autenticado, logout } = useContext(AutenticacaoContext)

    if (!autenticado) {
        return null
    }

    return (
        <button onClick={logout} type={tipo} className="btn btn-danger">SAIR</button>
    )
}

export default BotaoLogout
