import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AutenticacaoContext = createContext();

export const AutenticacaoProvider = ({ children }) => {
    const navegador = useNavigate();

    const [usuario, setUsuario] = useState(() => {
        const usuarioArmazenado = localStorage.getItem("usuario");
        return usuarioArmazenado ? JSON.parse(usuarioArmazenado) : null;
    });

    useEffect(() => {
        const usuarioArmazenado = localStorage.getItem("usuario");
        if (usuarioArmazenado) {
            setUsuario(JSON.parse(usuarioArmazenado));
        }
    }, []);

    const cadastro = (usuario) => {
        const {nome, email, senha, nascimento, sexo} = usuario;
       
          const novoUsuario = {
            id: gerarNovoId(),
             nome,
             email,
             senha,
             nascimento,
             sexo,
          };
          setUsuario(novoUsuario);
          console.log(novoUsuario)
          localStorage.setItem("usuario", JSON.stringify(novoUsuario));
        
      };

      const login = (email, senha) => {
        const usuarioArmazenado = localStorage.getItem("usuario");
        if (usuarioArmazenado) {
          const usuario = JSON.parse(usuarioArmazenado);
          if (usuario.email === email && usuario.senha === senha) {
            setUsuario(usuario);
            navegador("/home");
          } else {
            alert("E-mail ou senha incorretos");
          }
        } else {
          alert("Usuário não encontrado");
        }
      };
      

    const logout = () => {
        console.log("Já vai indo??????");
        navegador("/");
        setUsuario(null);
    };

    const gerarNovoId = () => {
        const ultimoId = parseInt(localStorage.getItem("ultimoId") || "0");
        const novoId = ultimoId + 1;
        localStorage.setItem("ultimoId", novoId.toString());
        return novoId;
    };

    return (
        <AutenticacaoContext.Provider
            value={{
                autenticado: !!usuario,
                usuario,
                login,
                logout,
                cadastro
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
};
