import React, { useState, useContext } from 'react'
import { AutenticacaoContext } from '../../contexts/autenticacao.jsx'
import './login.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import BotaoLink from '../../components/BotaoLink.jsx';


function Login() {
  const { login } = useContext(AutenticacaoContext) ?? {};
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const novoSubmit = (evento) => {
    evento.preventDefault();
    login(stateLogin.email, stateLogin.senha)
  }

  const [stateLogin, setStateLogin] = useState(
    {
      nome: '',
      email: '',
      senha: ''
    }
  )

  const mudaStateLogin = (evento, key) => {
    setStateLogin({
      ...stateLogin,
      [key]: evento.target.value
    })
  }

  const MostraSenha = () => {
    setMostrarSenha(!mostrarSenha);
  }

  return (
      <main className='login-main'>
        <div id='quad-interno'>

          <header className='cabecalho'>
            <h1>LOGIN</h1>
          </header>

          <section className='login-section'>
            <form method="POST" onSubmit={novoSubmit} id='login'>

              
              <div className='input-email'>
                <input type='email' placeholder='EMAIL' className='form-label'
                  value={stateLogin.email}
                  onChange={(evento) => mudaStateLogin(evento, 'email')}
                />
              </div>


              <div className='input-senha'>
                <input type={mostrarSenha ? 'text' : 'password'} placeholder='SENHA' className='form-label'
                  value={stateLogin.senha}
                  onChange={(evento) => mudaStateLogin(evento, 'senha')} />
                <button className="btn" type="button" onClick={MostraSenha}>
                  <img src="../../../public/img/lupa.png" alt="" /></button>
              </div>

              <div>
                <button type="submit" value="salvar" className='btn btn-dark'>LOGIN</button>
                <BotaoLink texto={"CRIAR CONTA"} caminho={"/cadastroUsuario"} classe={'btn btn-dark'} />
                <a>Esqueci a Senha</a>
              </div>

            </form>

          </section>

        </div>
      </main>
  )
}

export default Login
