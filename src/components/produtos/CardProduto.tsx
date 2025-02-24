// src/components/produtos/CardProduto.tsx
import React from 'react';
import { Produto } from '../../models/Produto';
import { Link } from 'react-router-dom';

interface CardProdutoProps {
  produto: Produto;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Imagem do Produto */}
      {produto.foto && (
        <img
          src={produto.foto}
          alt={produto.nome}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
      <p className="text-gray-700 mb-2">{produto.descricao}</p>
      <p className="text-gray-800 font-bold mb-2">
        Preço: R$ {produto.preco.toFixed(2)}
      </p>
      <p className="text-gray-600 mb-2">
        Quantidade em estoque: {produto.quantidade}
      </p>
      <p className="text-gray-600 mb-2">Laboratório: {produto.laboratorio}</p>
      <p className="text-gray-600 mb-4">
        Categoria: {produto.categoria.nome}
      </p>
      <div className="flex justify-end space-x-2">
        <Link to={`/produtos/editar/${produto.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Atualizar
          </button>
        </Link>
        <Link to={`/produtos/deletar/${produto.id}`}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardProduto;
