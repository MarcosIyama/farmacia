import React from 'react';
import { Categoria } from '../../models/Categoria';
import { Link } from 'react-router-dom';

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete: () => void;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{categoria.nome}</h3>
      <p className="text-gray-700 mb-4">{categoria.descricao}</p>
      <div className="flex justify-center space-x-2">
        <Link to={`/categorias/editar/${categoria.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Atualizar
          </button>
        </Link>
        <Link to={`/categorias/deletar/${categoria.id}`}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardCategoria