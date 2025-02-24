// src/components/produtos/DeletarProduto.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { obterProdutoPorId, deletarProduto } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';

const DeletarProduto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        try {
          const produtoData = await obterProdutoPorId(Number(id));
          setProduto(produtoData);
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      }
    };
    fetchProduto();
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      try {
        await deletarProduto(Number(id));
        navigate('/produtos');
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate('/produtos');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Excluir Produto</h2>
      {produto ? (
        <div>
          <p>
            Tem certeza de que deseja excluir o produto <strong>{produto.nome}</strong>?
          </p>
          <div className="mt-4 flex space-x-4 justify-center">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Excluir
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <p>Carregando informações do produto...</p>
      )}
    </div>
  );
};

export default DeletarProduto;
