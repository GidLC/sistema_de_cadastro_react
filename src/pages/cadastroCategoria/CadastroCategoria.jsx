import React, { useState } from "react";
import HeaderPrincipal from "../../components/HeaderPrincipal";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import Rodape from "../../components/Rodape";


function cadastroCategoria(){

    const [codigoCategoria, setCodigoCategoria] = useState('');
    const [nomeCategoria, setNomeCategoria] = useState('');
    const [descricaoCategoria, setDescricaoCategoria] = useState('');
    const [categoriaCadastrada, setCategoriaCadastrada] = useState(false);

    function cadastraCategoria(event){
        event.preventDefault()

        if(!codigoCategoria || !nomeCategoria || !descricaoCategoria){
            alert('Por favor, preencha todos os campos do formulário.')
            return;
        }

        const novaCategoria = {
            codigoCategoria: codigoCategoria,
            nomeCategoria: nomeCategoria,
            descricaoCategoria: descricaoCategoria
        }

        let categorias = JSON.parse(localStorage.getItem('categorias')) || [];

        categorias.push(novaCategoria);

        localStorage.setItem('categorias', JSON.stringify(categorias));

        setCodigoCategoria('');
        setNomeCategoria('');
        setDescricaoCategoria('');
        setCategoriaCadastrada(true);

        if (categoriaCadastrada){
            alert('Categoria Cadastrada com Sucesso');
        }
          
    }


    return(
        <>
            <main>
            
            <header>
                <HeaderPrincipal/>
            </header>

            
            <section>
                <div>
                    <header id="cabecalho">
                        <h1>CADASTRO DE CATEGORIA</h1>
                    </header>

                    <form onSubmit={cadastraCategoria}>
                        <fieldset>
                            <label htmlFor='codigoCategoria'>Código:</label>
                            <div><input type="text" name='codigoCategoria' id='codigoCategoria' value={codigoCategoria} onChange={(event) => {setCodigoCategoria(event.target.value); console.log(event.target.value)}}/></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='nomeCategoria'>Nome Categoria:</label>
                            <div><input type="text" name='nomeCategoria' id='nomeCategoria' value={nomeCategoria} onChange={(event) => {setNomeCategoria(event.target.value); console.log(event.target.value)}}/></div>
                        </fieldset>

                        <fieldset>
                        <label htmlFor="descricaoCategoria">Descrição:</label>
                        <div><input type="text" name='descricaoCategoria' id='descricaoCategoria' value={descricaoCategoria} onChange={(event) => {setDescricaoCategoria(event.target.value); console.log(event.target.value)}}/></div>
                        </fieldset>

                        <fieldset>
                            <BotaoPrincipal texto={'CADASTRAR'} tipo={'submit'}/>
                        </fieldset>
                        
                    </form>
                </div>
            </section>

        <footer>
            <Rodape/>
        </footer>
    </main>
        </>

    )
}

export default cadastroCategoria