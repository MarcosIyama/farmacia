import React, { useEffect, useState } from 'react';
import { listarProdutos } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';
import CardProduto from './CardProduto';

const ListarProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const fetchData = async () => {
    try {
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Lista de Produtos</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <CardProduto produto={produto} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarProdutos;
