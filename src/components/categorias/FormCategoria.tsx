// src/components/categorias/FormCategoria.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cadastrarCategoria, atualizarCategoria, obterCategoriaPorId } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';

const FormCategoria: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({
    id: id ? Number(id) : 0,
    nome: '',
    descricao: '',
  });

  useEffect(() => {
    if (id) {
      const carregarCategoria = async () => {
        try {
          const categoriaExistente = await obterCategoriaPorId(Number(id));
          setCategoria(categoriaExistente);
        } catch (error) {
          console.error('Erro ao carregar categoria:', error);
        }
      };
      carregarCategoria();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await atualizarCategoria(categoria);
      } else {
        await cadastrarCategoria(categoria);
      }
      navigate('/categorias');
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{id ? 'Editar Categoria' : 'Nova Categoria'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nome:</label>
          <input
            name="nome"
            value={categoria.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Descrição:</label>
          <input
            name="descricao"
            value={categoria.descricao}
            onChange={handleInputChange}
            placeholder="Descrição"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          {id ? 'Atualizar' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default FormCategoria;
