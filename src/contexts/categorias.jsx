import React, { useState, createContext } from "react";

export const CategoriasContext = createContext();

export const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [descricaoCategora, setDescricaoCategoria] = useState([]);

  const adicionaCategoria = (novaCategoria) => {
    setCategorias([...categorias, novaCategoria]);
  };

  const removeCategoria = (categoriaId) => {
    setCategorias(categorias.filter((categoria) => categoria.id !== categoriaId));
  };

  const categoria = {
    codigoCategoria,
    nomeCategoria,
    descricaoCategora,
    adicionaCategoria,
    removeCategoria,
  };

  return (
    <CategoriasContext.Provider value={categoria}>
      {children}
    </CategoriasContext.Provider>
  );
};
