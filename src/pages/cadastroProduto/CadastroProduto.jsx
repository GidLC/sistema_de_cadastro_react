import React, { useState, useEffect } from "react";
import HeaderPrincipal from "../../components/HeaderPrincipal";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import Rodape from "../../components/Rodape";
import BotaoLink from "../../components/BotaoLink";

function CadastroProduto() {

    const [codigoProduto, setCodigoProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [marca, setMarca] = useState('');
    const [precoCompra, setPrecoCompra] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [estoqueAtual, setEstoqueAtual] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [produtoCadastro, setProdutoCadastro] = useState(false);
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        const categoriasSalvas = JSON.parse(localStorage.getItem('categorias'));
        if(categoriasSalvas){
            setCategorias((categoriasSalvas));
        }
    }, []);


    function cadastraProduto(event) {
        event.preventDefault();


        // Valida os campos do formulário
        if (!codigoProduto || !descricao || !marca || !precoCompra || !precoVenda || !estoqueAtual || !categoria) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Cria um objeto que representa o novo produto
        const novoProduto = {
            codigoProduto: codigoProduto.toString(),
            descricao: descricao,
            marca: marca,
            precoCompra: parseFloat(precoCompra),
            precoVenda: parseFloat(precoVenda),
            estoqueAtual: parseInt(estoqueAtual),
            categoria: categoria
        };


        // Obtém o array de produtos do LocalStorage (ou cria um novo, caso não exista)
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        // Adiciona o novo produto ao array
        produtos.push(novoProduto);
        console.log(novoProduto);

        // Salva o array atualizado no LocalStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));

        // Limpa os campos do formulário
        setCodigoProduto('');
        setDescricao('');
        setMarca('');
        setPrecoCompra('');
        setPrecoVenda('');
        setEstoqueAtual('');
        setCategoria('');
        setProdutoCadastro(true);

        if (produtoCadastro) {
            alert('Produto Cadastrado com Sucesso');
        }
    }


    return (

        <main>

            <header>
                <HeaderPrincipal />
            </header>


            <section>
                <div>
                    <header id="cabecalho">
                        <h1>CADASTRO DE PRODUTOS</h1>
                    </header>

                    <form onSubmit={cadastraProduto}>
                        <fieldset>
                            <label htmlFor='codigoProduto'>Código:</label>
                            <div><input type="text" name='codigoProduto' id='codigoProduto' value={codigoProduto} onChange={(event) => { setCodigoProduto(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='descricao'>Descrição:</label>
                            <div><input type="text" name='descricao' id='descricao' value={descricao} onChange={(event) => { setDescricao(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="marca">Marca:</label>
                            <div><input type="text" name='marca' id='marca' value={marca} onChange={(event) => { setMarca(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="precoCompra">Preço de Compra:</label>
                            <div><input type="number" name='precoCompra' id='precoCompra' value={precoCompra} onChange={(event) => { setPrecoCompra(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="precoVenda">Preço de Venda:</label>
                            <div><input type='number' name='precoVenda' id='precoVenda' value={precoVenda} onChange={(event) => { setPrecoVenda(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="estoqueAtual">Estoque Atual:</label>
                            <div><input type='number' name='estoque' id='estoqueAtual' value={estoqueAtual} onChange={(event) => { setEstoqueAtual(event.target.value); console.log(event.target.value) }} /></div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="categoria">Categoria:</label>
                            <div>
                                <select name="categoria" id="categoria" onChange={(event) => {setCategoria(event.target.value); console.log(event.target.value)}}>
                                    {categorias.map((categorias) => (
                                        <option key={categorias.codigoCategoria} value={categorias.nomeCategoria}>
                                            {categorias.nomeCategoria}
                                        </option>
                                    ))}
                                </select>
                                <BotaoLink caminho={"/cadastroCategoria"} texto={"categoria"} classe={"btn btn-dark"} type={"button"} />
                            </div>
                        </fieldset>

                        <fieldset>
                            <BotaoPrincipal texto={'CADASTRAR'} type={'submit'} />
                        </fieldset>

                    </form>
                </div>
            </section>

            <footer>
                <Rodape />
            </footer>
        </main>
    )
}


export default CadastroProduto