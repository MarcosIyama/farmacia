// src/components/categorias/DeleteCategoriaPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { obterCategoriaPorId, deletarCategoria } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';

const DeleteCategoriaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  useEffect(() => {
    const fetchCategoria = async () => {
      if (id) {
        try {
          const categoriaData = await obterCategoriaPorId(Number(id));
          setCategoria(categoriaData);
        } catch (error) {
          console.error('Erro ao buscar categoria:', error);
        }
      }
    };
    fetchCategoria();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletarCategoria(Number(id));
      navigate('/categorias');
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
    }
  };

  const handleCancel = () => {
    navigate('/categorias');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Excluir Categoria</h2>
      {categoria ? (
        <div>
          <p>
            Tem certeza de que deseja excluir a categoria{' '}
            <strong>{categoria.nome}</strong>?
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
        <p>Carregando informações da categoria...</p>
      )}
    </div>
  );
};

export default DeleteCategoriaPage;
