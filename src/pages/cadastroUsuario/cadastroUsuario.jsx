import React, { useState, useContext } from "react";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import Rodape from "../../components/Rodape";
import { AutenticacaoContext } from '../../contexts/autenticacao.jsx';
import BotaoLink from "../../components/BotaoLink";
import { useNavigate } from "react-router-dom";



function CadastroUsuario() {
    const navegador = useNavigate()
    const { cadastro } = useContext(AutenticacaoContext);

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [confSenhaUsuario, setConfSenhaUsuario] = useState('');
    const [nascimentoUsuario, setNascimentoUsuario] = useState('');
    const [sexoUsuario, setSexoUsuario] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfSenha, setMostrarConfSenha] = useState(false);
    const [usuarioCadastrado, setUsuarioCadastrado] = useState(false);

    const MostraSenha = (e) => {
        setMostrarSenha(!mostrarSenha);
    }

    const MostraConfSenha = (e) => {
        setMostrarConfSenha(!mostrarConfSenha);
    }

    function cadastraUsuario(event) {
        event.preventDefault();

        if (!nomeUsuario || !emailUsuario || !senhaUsuario || !confSenhaUsuario || !nascimentoUsuario || !sexoUsuario) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        if (senhaUsuario != confSenhaUsuario) {
            alert('As senhas digitadas não conferem!!!');
            return;
        }

        const novoUsuario = {
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario,
            nascimento: nascimentoUsuario,
            sexo: sexoUsuario,
        };

        cadastro(novoUsuario);
        

        setNomeUsuario('');
        setEmailUsuario('')
        setSenhaUsuario('')
        setNascimentoUsuario('')
        setUsuarioCadastrado(true);

        if(usuarioCadastrado == true){
            alert('Usuario Cadastrado com Sucesso!!!')
            navegador('/')
        }
    
    }
    

    return (
        <main>
            <section>
                <div id='quad-interno'>

                    <header id="cabecalho">
                        <h1>CADASTRO DE USUÁRIO</h1>
                    </header>

                    <form method="POST" onSubmit={cadastraUsuario}>

                        <div><label htmlFor='nomeUsuario'>NOME:</label></div>
                        <input type="text" name='nomeUsuario' id='nomeUsuario' value={nomeUsuario} onChange={(event) => { setNomeUsuario(event.target.value); console.log(event.target.value) }} />

                        <div><label htmlFor="emailUsuario">E-MAIL:</label></div>
                        <input type="text" name='emailUsuario' id='emailUsuario' value={emailUsuario} onChange={(event) => { setEmailUsuario(event.target.value); console.log(event.target.value) }} />

                        <div><label htmlFor="senhaUsuario">SENHA:</label></div>
                        <input type={mostrarSenha ? 'text' : 'password'} name='senhaUsuario' id='senhaUsuario' placeholder="SENHA" value={senhaUsuario} onChange={(event) => { setSenhaUsuario(event.target.value); console.log(event.target.value) }} />
                        <button className="btn btn-secondary" type="button" onClick={MostraSenha}>{mostrarSenha ? 'Esconder' : 'Mostrar'}</button>


                        <div><label htmlFor="confSenhaUsuario">CONFIRMAR SENHA:</label></div>
                        <input type={mostrarConfSenha ? 'text' : 'password'} name='confSenhaUsuario' id='confSsenhaUsuario' placeholder="REPITA A SENHA" value={confSenhaUsuario} onChange={(event) => { setConfSenhaUsuario(event.target.value); console.log(event.target.value) }} />
                        <button className="btn btn-secondary" type="button" onClick={MostraConfSenha}>{mostrarConfSenha ? 'Esconder' : 'Mostrar'}</button>

                        <div><label htmlFor="nascimentoUsuario">DATA DE NASCIMENTO:</label></div>
                        <input type="date" name='nascimentoUsuario' id='nascimentoUsuario' value={nascimentoUsuario} onChange={(event) => { setNascimentoUsuario(event.target.value); console.log(event.target.value) }} />

                        <div>
                            <label htmlFor="sexoUsuario">Sexo:</label>
                        </div>
                        <div>
                            <label htmlFor="masculino">
                                <input type="radio" name="sexoUsuario" id="masculino" value="masculino" checked={sexoUsuario === 'masculino'}
                                    onChange={(event) => {
                                        setSexoUsuario(event.target.value);
                                        console.log(event.target.value);
                                    }}
                                />
                                Masculino
                            </label>
                        </div>
                        <div>
                            <label htmlFor="feminino">
                                <input type="radio" name="sexoUsuario" id="feminino" value="feminino" checked={sexoUsuario === 'feminino'}
                                    onChange={(event) => {
                                        setSexoUsuario(event.target.value);
                                        console.log(event.target.value);
                                    }}
                                />
                                Feminino
                            </label>
                        </div>

                        <div>
                            <BotaoPrincipal texto={'CADASTRAR'} tipo={'submit'}/>
                            <BotaoLink texto={"CANCELAR"} caminho={"/"} classe={'btn btn-dark'} />
                        </div>
                    </form>
                </div>
            </section>

            <footer>
                <Rodape />
            </footer>
        </main>
    )
}

export default CadastroUsuario