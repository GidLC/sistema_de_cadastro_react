import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";


function BotaoLink({ texto, classe, tipo, caminho }) {
    const navegar = useNavigate();

    return (
        
            <button type={tipo} className={classe} onClick={() => navegar(caminho)}>
                {/*<img src="./home-3.png" style={{width: "100%", height:"100%"}}/>*/}
                {texto}
            </button>

    )
}

export default BotaoLink