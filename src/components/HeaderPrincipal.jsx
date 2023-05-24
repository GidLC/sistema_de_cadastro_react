    import React, {useState, useEffect} from "react";
    import '../../node_modules/bootstrap/dist/css/bootstrap.css'
    import styled from 'styled-components';
    import BotaoLogout from "./BotaoLogout";
    import BotaoLink from "./BotaoLink";

    const StyledUl = styled.ul`
        height: 100%;
    `

    const Styledli = styled.li`
        margin-left: 95%;
        margin-top: -3%;
    `

    function HeaderPrincipal({ }) {
            //armazenando os produtos
            const [usuario, setUsuario] = useState([]);

            function buscaUsuario() {
                const usuario = JSON.parse(localStorage.getItem('usuario'));
                if (usuario) {
                  if (Array.isArray(usuario)) {
                    setUsuario(usuario);
                  } else {
                    setUsuario([usuario]);
                  }
                }
            }
              
        
            useEffect(() => {
                buscaUsuario();
            }, []);

        return (
            <>
                <StyledUl className="nav nav-tabs" id="navId">
                    <li className="nav-item">
                        <BotaoLink texto={"HOME"} caminho={"/home"} classe={'btn btn-dark'}/>
                    </li>

                    <li className="nav-item">
                        <BotaoLink texto={"CADASTRO DE PRODUTOS"} caminho={"/cadastroProduto"} classe={'btn btn-dark'}/>
                    </li>

                    <li className="nav-item">
                        {Array.isArray(usuario) && usuario.map((usuario, index) => (
                        <div key={index}>
                        <label htmlFor={`usuario-${index}`}>{usuario.nome}</label>
                        </div>
                        ))}
                    </li>

                    <Styledli className="nav-item">
                        <BotaoLogout tipo={"button"} classe={"btn tbn-dark"}/>
                    </Styledli>
                </StyledUl>
            </>
        )
    }

    export default HeaderPrincipal;