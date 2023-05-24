import React, { useState, useEffect } from "react";
import './home.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import HeaderPrincipal from "../../components/HeaderPrincipal";
import Rodape from "../../components/Rodape";

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtos = JSON.parse(localStorage.getItem('produtos'));
        if (produtos) {
            if (Array.isArray(produtos)){
                setProdutos(produtos);
            }else{
                setProdutos([produtos]);
            }
        }
    }, []);

    return (
        <main className="home-main">
            <header className="home-header">
                <HeaderPrincipal />
            </header>

            <section className="home-section">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Preço de Compra</th>
                            <th scope="col">Preço de Venda</th>
                            <th scope="col">Estoque Atual</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.codigo}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.precoCompra}</td>
                                <td>{produto.precoVenda}</td>
                                <td>{produto.estoqueAtual}</td>
                                <td>{produto.categoria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <footer className="home-footer">
                <Rodape />
            </footer>
        </main>
    )
}

export default Home;
